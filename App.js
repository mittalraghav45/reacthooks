import React, { useState } from 'react';
import UserBar from './user/UserBar';
import CreatePost from './post/CreatePost';
import PostList from './post/PostList';


  const defaultPosts=[
    {
      title:"testPost",
      content:"test content",
      author:"test author",     
    },
    {
      title:"testPost2",
      content:"test content2",
      author:"test author2",     
    }

  ]
  export default function App()
  {
    const[user,setUser]= useState('');
    const[posts,setPosts]= useState(defaultPosts);
    
    return(
      <div style={{padding:8}}>
    <UserBar user={user} setUser={setUser}/>
    <br/>
    {user && <CreatePost user={user} posts={posts} setPosts={setPosts} 
    />}
    <br/>
    <hr/>
    <PostList posts={posts}/>
    </div>
    )
  }
  
