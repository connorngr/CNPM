import { connectToDB } from "@utils/database";
import Post from "@models/post"

export const POST = async (request) => {
    const {userId, name, description} = await request.json();

    try {
        await connectToDB();
        const newPost = new Post({
            creator: userId,
            name, description
        })
        await newPost.save();

        return new Response(JSON.stringify(newPost), {status: 201});
    }
    catch (error) {
        return new Response("Failed to create a new post", {error: 500});
    }
}