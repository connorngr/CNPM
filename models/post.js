import {Schema, model, models} from "mongoose";

const PostSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Project name is required."],
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    }
});

const Post = models.Post || model("Post", PostSchema);

export default Post;