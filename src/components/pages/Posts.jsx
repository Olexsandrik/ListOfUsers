import React, { useState, useEffect} from 'react';
import { PostList } from '../PostList';
import { PostForm } from '../PostForm';
import {PostFilter} from '../UI/filter/PostFilter'
import {MyModal} from '../UI/Modal/MyModal'
import { Button } from '../UI/Button/Button';
import { usePosts } from '../hooks/usePosts';
import PostService from '../../API/PostService';
import {Loader} from '../Loading/Loader';
import {useFetching} from '../hooks/useFetching';
import {getPagesCount} from '../../utils/pages'
import { Paginations } from '../UI/Paginations/Pagination';
import { useRef } from 'react';
import { useObserver } from '../hooks/useObserver';
import { MySelect } from '../UI/select/MySelect';

export function Posts() {
 
 const [posts,setPosts] = useState([]);
  const [filter, setFilter] = useState({query: '', sort: ''});
  const [modal,setModal] = useState(false);
  const sortedAndSearchedPost = usePosts(posts,filter.sort,filter.query);
  const [totalPages,setTotalPages] = useState(0);
  const [limit,setLimit] = useState(10);
  const [page,setPage] = useState(1);
  const lastElement = useRef();

 

  const [fetchPosts, isPostsLoading, postError] = useFetching( async()=>{
    const response = await PostService.getAll(limit,page);

    setPosts([...posts,...response.data]);
    const totalCount = response.headers['x-total-count']; 
    setTotalPages(getPagesCount(totalCount,limit));
  })
 






  useObserver(lastElement, page<totalPages, isPostsLoading, ()=>{
    setPage(page+1);
  })
  useEffect(()=>{
    fetchPosts();
  },[page,limit])

  const createPost=(newPost)=>{
      setPosts([...posts, newPost]);
      setModal(false);

     
  }

  const removePost=(post)=>{
     setPosts(posts.filter(p=>p.id!==post.id)); 
  }

  const changePage=(page)=>{
    setPage(page);
  }

 
  
  return (
    <div className="App">
      
  

      <Button style={{marginTop: '40px'}} onClick={()=>setModal(true)}>ADD POST</Button>
   
      <MyModal  visible={modal} setVisible={setModal}>
 
        <PostForm create={createPost} postLength={posts.length}/> 
      </MyModal>
      <hr style={{marginTop:'15px'}} />
    <PostFilter filter={filter} setFilter={setFilter}/>

      <MySelect
      value={limit}
      onChange={e=> setLimit(e)}

      defaulvalue={'кількість елементів на сторінці'}
      option={[
        {value: 5, name: '5'},
        {value: 10, name: '10'},
        {value: 25, name: '25'},
        {value: -1, name: 'ALL POSTS'}
      ]}
      />
   
        {postError &&
          <h1> Винекла помилка ${postError}</h1>
        }

        {isPostsLoading ? <div style={{display:'flex', justifyContent: "center", marginTop:'20px'}}><Loader/></div> : <PostList remove={removePost} posts={sortedAndSearchedPost} title={"Перший пост"}/>}
        <div ref={lastElement} style={{height:'20px', background:'red'}}/>
        <Paginations totalPages={totalPages} page={page} changePage={changePage}/>
       
        
    </div>
    

  );
}


