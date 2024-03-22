import { BlogModel } from "../models/blog.models.js";


// POST blog
export const postBlog = async(req, res) =>{
const blogResult = await  BlogModel.create({...req.body});
if(!blogResult){
    return res.status(404).json('Error creating new blog');
} else {
    return res.status(201).json('Blog created successfully!');
}
};

// GET  all blogs
export const getAllBlogs = async (req, res) =>{
    const getResults = await BlogModel.find();
    if(getResults.length === 0){
        return res.status(404).json("No data found");
    } else{
        return res.status(200).json(getResults);
    }
};

// UPDATE all blogs
export const updateAllBlogs = async (req,res) =>{
    const updateResults = await BlogModel.updateMany();
    if(!updateResults){
        return res.status(404).json('No Blog found!')
    } else {
return  res.status(200).json(updateResults)};       
};

// DELETE all blogs
export const  deleteAllBlogs = async (req,res) =>{
    const  removeResult=await BlogModel.deleteMany();
     if(!removeResult){
         return res.status(404).json("No data found!");
     }else{
        return res.status(200).json(removeResult);
}
};

// GET one blog by id
export const getOneBlog = async(req , res)=>{
    const getOneResult = await BlogModel.findOne();
    if(!getOneResult){
        return res.status(404).json("The Blog with the given ID was not found.")
    } else{
        res.status(200).json(getOneResult)
    };
}

// UPDATE one blog by id
export const updateOneBlog = async(req , res)=> {
    const updateOneResult = await BlogModel.updateOne();
    if(!updateOneResult){
        return res.status(400).json("Update failed.");
    }else{
       res.status(200).json('Updated successfully');
    }  
}

//  DELETE one blog by id
export const deleteOneBlog = async function(req, res){
    const removeOnedBlog = await BlogModel.deleteOne();
    if (!removeOnedBlog) {
        return res.status(400).json('Failed to Delete.');
    } else {
        return res.status(200).json('Deleted Successfully!')
    }
    };

    