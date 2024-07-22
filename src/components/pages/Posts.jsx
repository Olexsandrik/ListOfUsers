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

export function Posts() {
 
 const [posts,setPosts] = useState([]);
  const [filter, setFilter] = useState({query: '', sort: ''});
  const [modal,setModal] = useState(false);
  const sortedAndSearchedPost = usePosts(posts,filter.sort,filter.query);
  const [totalPages,setTotalPages] = useState(0);
  const [limit,setLimit] = useState(10);
  const [page,setPage] = useState(1);


  const [fetchPosts, isPostsLoading, postError] = useFetching( async()=>{
    const response = await PostService.getAll(limit,page);

    setPosts(response.data);
    const totalCount = response.headers['x-total-count']; 
    setTotalPages(getPagesCount(totalCount,limit));
  })
 


  useEffect(()=>{
    fetchPosts();
  },[page])

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
   
   
        {postError &&
          <h1> Винекла помилка ${postError}</h1>
        }

        {isPostsLoading ? <div style={{display:'flex', justifyContent: "center", marginTop:'20px'}}><Loader/></div> : <PostList remove={removePost} posts={sortedAndSearchedPost} title={"Перший пост"}/>}
        <Paginations totalPages={totalPages} page={page} changePage={changePage}/>
        
    </div>
    

  );
}


