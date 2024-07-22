import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../../API/PostService';
import { useFetching } from '../hooks/useFetching';
import { useState } from 'react';
import { Loader } from '../Loading/Loader';

export const PostIdMain = () => {

    const params = useParams();
    const [post, setPost] = useState({});

    const [fetchingPostById, isLoading, error] = useFetching(async  ()=>{
        const response =  await PostService.getById(params.id);
        setPost(response.data);

    });

    useEffect(()=>{
        fetchingPostById();
    },[])

  return (
    <div>
        <h1>{post.id}.{post.title}</h1>

        {isLoading
            ?<Loader/>
            : <h2>{post.body}</h2>
        }

       
    </div>
  )
}
