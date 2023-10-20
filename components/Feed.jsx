"use client";

import { useState, useEffect } from "react";

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
  
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
  
      setPost(data);
    }
    console.log(post);
    fetchPosts();
  }, [])
  const handleSearchChange = (e) => {

  }
  
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input 
        type="text"
        placeholder="Find projects here"
        value={searchText}
        onChange={handleSearchChange}
        required
        className="search_input peer" />
      </form>
      <PostCardList
      data={post}
      handleTagClick={""}/>
    </section>
  )
}

export default Feed
