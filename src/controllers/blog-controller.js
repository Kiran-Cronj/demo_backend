import Blog from "../model/Blog.js"

export const getAllBlogs = async (req, res, next) => {
	console.log("getall");
	let blogs;
	try {
		blogs = await Blog.find();
	} catch (err) {
		return console.log(err);
	}
	if (!blogs) {
		return res.status(404).json({message: "no blogs found"})
	}
	return res.status(200).json({blogs})
}
export const addBlog = async (req, res, next) => {
	const { title, description, image , user} = req.body;
	const blog = new Blog({
    title,
    description,
    image,
    user,
	});
	try {
		blog.save();
	}
	catch (err) {
		return console.log(err)
	}
	res.status(200).json({blog})

};