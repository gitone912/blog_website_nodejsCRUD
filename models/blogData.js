import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title : {type: String, required: true},
    blog : {type: String, required: true},
    date_published : {type: Date, default: Date.now},
    date_edited : {type: Date, default: Date.now},
    author : {type: String},


})
const Blog = mongoose.model("Blog", blogSchema)
export default Blog