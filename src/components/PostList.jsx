import React from 'react'
import { PostItem } from './PostItem'
import { TransitionGroup } from 'react-transition-group'
import {CSSTransition} from 'react-transition-group'

export const PostList = ({posts,title,remove}) => {

  if(!posts.length){
    return <h1 style={{textAlign:'center'}}>Немає постів</h1>
  }
  return (
    <div>
         <h1>{title}</h1>

         <TransitionGroup>
         
              {posts.map(post=>
              <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
            >
              <PostItem remove={remove} posts={post} />
              </CSSTransition>
              )}
           
         </TransitionGroup>
     
    </div>
  )
}
