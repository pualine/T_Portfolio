import { BlogModel } from "../models/blog.models.js";

// POST blog
export const addBlog = async (req, res, next) => {
  try {
    const blogResult = await BlogModel.create({ ...req.body });
    return res.status(201).json("Blog was created successfully!");
  } catch (error) {
    next(error);
  }
};

// GET  all blogs
export const getAllBlogs = async (req, res, next) => {
  try {
    const getResults = await BlogModel.find();
    if (getResults.length === 0) {
      return res.status(404).json("No data found");
    } else {
      return res.status(200).json(getResults);
    }
  } catch (error) {
    next(error);
  }
};

// UPDATE all blogs
export const updateAllBlogs = async (req, res, next) => {
  try {
    const updateResults = await BlogModel.updateMany();
    if (!updateResults) {
      return res.status(404).json("No Blog found!");
    } else {
      return res.status(200).json(updateResults);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE all blogs
export const deleteAllBlogs = async (req, res, next) => {
  try {
    const removeResult = await BlogModel.deleteMany();
    return res.status(200).json("Deleted Successfully!");
  } catch (error) {
    next(error);
  }
};

// GET one blog by id
export const getOneBlog = async (req, res, next) => {
  try {
    const getOneResult = await BlogModel.findById({ _id: req.params.id });
    if (!getOneResult) {
      return res
        .status(404)
        .json(`The Blog with the given ID:${req.params.id} was not found.`);
    } else {
      return res.status(200).json(getOneResult);
    }
  } catch (error) {
    next(error);
  }
};

// UPDATE one blog by id
export const updateOneBlog = async (req, res, next) => {
  try {
    const updateOneResult = await BlogModel.findByIdAndUpdate({_id: req.params.id});
    if (!updateOneResult) {
      return res
        .status(404)
        .json(`No blog with this ID:${req.params.id} exists`);
    } else {
      return res.status(200).json("Updated successfully");
    }
  } catch (error) {
    next(error);
  }
};

//  DELETE one blog by id
export const deleteOneBlog = async function (req, res, next) {
  try {
    const removeOnedBlog = await BlogModel.findByIdAndDelete({
      _id: req.params.id,
    });
    if (!removeOnedBlog) {
      return res
        .status(404)
        .json(`The blog with the given ID:${req.params.id} was not found.`);
    } else {
      return res.status(200).json("Deleted Successfully!");
    }
  } catch (error) {
    next(error);
  }
};
