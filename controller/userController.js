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
    static submitBlog = async (req , res) => {
        console.log(req.body)
        try {
            const {title,author,blog} = req.body
            const doc = new Blog ({
                title:title,
                author:author,
                blog:blog
            })
            const result = await doc.save()
            console.log(result)
            res.redirect("/")
        } catch (error) {
            console.log(error)
        }
    }
    static renderBlog = async (req , res) => {
        try {
            
            const result = await Blog.findById(req.params.id)
            console.log(result)
            res.render('read',{data:result})
        } catch (error) {
            console.log(error)
        }
    }
    static editBlog = async (req , res) => {
        try {
            const result = await Blog.findById(req.params.id)
            res.render('update',{data:result})
        } catch (error) {
            console.log(error)
        }
    }
    static updateBlog = async (req , res) => {
        try {
            const result = await Blog.findByIdAndUpdate(req.params.id,req.body)
            console.log(result)
            res.redirect("/")
        } catch (error) {
            console.log(error)
        }
    }
    static deleteBlog = async (req , res) => {
        try {
            const result = await Blog.findByIdAndDelete(req.params.id)
            console.log(result)
            res.redirect("/")
        } catch (error) {
            console.log(error)
        }
    }


}
export default BlogController