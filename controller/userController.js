import Blog from "../models/blogData.js"

class BlogController {
    static renderHome = (req, res) => {
        res.render("index")
    }

    static createBlog = (req , res) => {
        res.render("createBlog")
    }
    static renderBlog = (req , res) => {
        res.render("blog")
    }


}
export default BlogController