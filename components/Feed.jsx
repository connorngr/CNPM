"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import PostCard from "./PostCard";

const PostCardList = ({data, handleTagClick}) => {
  return (
    <div className="mt-10 prompt_layout">
      {data.map((post) => (
        <PostCard
        key={post._id}
        post={post}
        handleTagClick={handleTagClick}/>
      ))}
    </div>
  )
}
const Feed = () => {
  const [searchText, setSearchText] = useState("");

  const [post, setPost] = useState([]);
  const {data: session} = useSession();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/post');
      const data = await response.json();
  
      setPost(data);
    };
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    
  }
  
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        
      </form>
    {session?
    <>
    <input 
    type="text"
    placeholder="Tìm dự án"
    value={searchText}
    onChange={handleSearchChange}
    required
    className="search_input peer" />
     <PostCardList
      data={post}
      handleTagClick={""}/> </> : <></>}
      
    </section>
  )
}

export default Feed
