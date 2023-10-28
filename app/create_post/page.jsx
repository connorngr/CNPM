"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";;
import { useRouter } from "next/navigation";

import Form from '@components/Form';

const CreatePost = () => {
  const router = useRouter();
  const {data: session} = useSession();

  const [submit, setSubmit] = useState(false);
  const [post, setPost] = useState({
    name: "",
    description: "",
  });
  const createPost = async (e) => {
    e.preventDefault();
    setSubmit(true);

    try {
      const response = await fetch("/api/post/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          name: post.name,
          description: post.description,
        })
      })

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
      type="Tạo"
      post={post}
      setPost={setPost}
      submit={submit}
      handleSubmit={createPost}
      />
  )
}

export default CreatePost
