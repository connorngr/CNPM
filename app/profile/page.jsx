"use client";
 import { useState, useEffect } from "react";
 import { useSession } from "next-auth/react";
 import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const MyProfile = () => {
    const {data: session} = useSession();
    const router = useRouter();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data = await response.json();
      
          setPosts(data);
        };
        if (session?.user.id) fetchPosts();
      }, []);

      const handleEdit = (post) => {
        router.push(`/update-post?id=${post._id}`);
      };
  
      const handleDelete = async (post) => {
        const confirmed = confirm("Do you want to delete this post?");
        if (confirmed) {
          try {
            await fetch(`api/post/${post._id.toString()}`, {
              method: "DELETE"
            })
            const FilteredPosts = posts.filter((p) => p._id !== posts._id);
            setPosts(FilteredPosts);
          } catch (error) {
            console.log(error);
          }
        }
      };
  return (
    <Profile
    name="My"
    desc="Welcome to your personal page"
    data={posts}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
    />
  )
}

export default MyProfile
