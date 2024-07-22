import React,{useState} from 'react'
import { MyInput } from './UI/Input/MyInput'
import { Button } from './UI/Button/Button';

export const PostForm = ({create,postLength}) => {
    const [post, setPost] = useState({title: '', body: ''});


    const addNewPost=(e) =>{
        e.preventDefault()
        const newPost={
          id: postLength+1,
          title: post.title,
          body: post.body
        }
      
        create(newPost);
        setPost({title: '', body: ''})
      }


  return (
    <form>
    <MyInput type="text" value={post.title} placeholder="Назва" onChange={(e)=>setPost ({...post,title:e.target.value})} />
    <MyInput type="text" value={post.body}  placeholder="Опис" onChange={(e)=>setPost({...post, body: e.target.value})} />
    <Button onClick={addNewPost}>Додати</Button>
  </form>
  )
}
