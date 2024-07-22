import React from 'react';
import { Button } from './UI/Button/Button';

export const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.posts.id}. {props.posts.title}</strong>
        <div>{props.posts.body}</div>
      </div>
      <Button onClick={() => props.remove(props.posts)}>Видалити</Button>
    </div>
  );
};

