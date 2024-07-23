import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../../API/PostService';
import { useFetching } from '../hooks/useFetching';
import { useState } from 'react';
import { Loader } from '../Loading/Loader';

export const PostIdMain = () => {

    const params = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);

    const [fetchingPostById, isLoading, error] = useFetching(async  ()=>{
        const response =  await PostService.getById(params.id);
        setPost(response.data);

    });

    const [fetchComment, isLoadingComment, errorComment] = useFetching(async  ()=>{
        const response =  await PostService.getByComment(params.id);
        setComment(response.data);

    });

    useEffect(()=>{
        fetchingPostById();
        fetchComment();
    },[])

  return (
    <div>
        <h1>{post.id}.{post.title}</h1>

        {isLoading
            ?<Loader/>
            : <h2>{post.body}</h2>
            
        }
        <h1>Коментраі</h1>

        <hr />
        {
            isLoadingComment
            ? <Loader/>
            : <div>{comment.map(comn=>
                    <div>
                        <h1>{comn.name}</h1>
                        <h2>comn.email</h2>
                    </div>
            )}
            </div>
            
        }
       
       
    </div>
  )
}
