import Blog from "../models/blogData.js"

class BlogController {
    static renderHome = async (req, res) => {
        try {
            const result = await Blog.find()
            res.render('index',{data:result})
        } catch (error) {
            console.log(error)
        }
    }

    static createBlog = (req , res) => {
        res.render("edit")
    }
    static renderBlog = (req , res) => {
        res.render("blog")
    }


}
export default BlogController