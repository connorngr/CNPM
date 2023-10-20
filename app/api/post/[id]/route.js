import { connectToDB } from "@utils/database";
import Post from "@models/post";
//Get (read)
export const GET = async (request, {params}) => {
    try {
        await connectToDB();

        const post = await Post.findById(params.id).populate('creator');
        if (!post) return new Response("Post not found", {status: 404})
        return new Response(JSON.stringify(post), {
            status: 200
        })
    }
    catch (error) {
        return new Response("Failed to fetch all posts", {status: 500})
    }
}

//Patch (update)
export const PATCH = async (request, {params}) => {
    const {name, description} = await request.json();

    try {
        await connectToDB();
        const existingName = await Post.findById(params.id);
        if (!existingName) return new Response("Project not found", {status: 404});

        existingName.name = name;
        existingName.description = description;

        await existingName.save();

        return new Response(JSON.stringify(existingName), {status: 200}) // 200 succeeded
    } catch (error) {
        return new Response("Failed to update project", {status: 500})
    }
}

//Delete

export const DELETE = async (request, {params}) => {
    try {
        await connectToDB();
        await Post.findByIdAndRemove(params.id);

        return new Response("Post deleted successfully", {status: 200});
    } catch (error) {
        return new Response("Failed to delete post", {status: 500});
    }
}