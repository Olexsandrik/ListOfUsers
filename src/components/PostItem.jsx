import React from 'react';
import { Button } from './UI/Button/Button';
import {useNavigate } from "react-router-dom";

export const PostItem = (props) => {

  const router = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.posts.id}. {props.posts.title}</strong>
        <div>{props.posts.body}</div>
      </div>
      <Button onClick={()=>router(`/posts/${props.posts.id}`) }>Відкрити</Button>
      <Button onClick={() => props.remove(props.posts)}>Видалити</Button>
      
    </div>
  );
};

