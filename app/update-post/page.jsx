"use client";

import { useState,useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from '@components/Form';

const EditPost = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const postId = searchParams.get('id');

  const [submit, setSubmit] = useState(false);
  const [post, setPost] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    const GetPostDetails = async () => {
        const response = await fetch(`/api/post/${postId}`);
        const data = await response.json();

        setPost({
            name: data.name,
            description: data.description,
        });
      };
    if (postId) GetPostDetails();
    
  }, [postId])
  const EditPost = async (e) => {
    e.preventDefault();
    setSubmit(true);
    if (!postId) return alert("Post not found");
    try {
      const response = await fetch(`api/post/${postId}`, {
        method: "PATCH",
        body: JSON.stringify({
          name: post.name,
          description: post.description,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
        console.log(error);
    } finally {
      setSubmit(false);
    }
  }
  return (
      <Form 
      type="Edit"
      post={post}
      setPost={setPost}
      submit={submit}
      handleSubmit={EditPost}
      />
  )
}

export default EditPost
