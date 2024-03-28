import { SkillsModel } from "../models/skills.models.js";

// POST blog
export const postskills = async (req, res) => {
  const skillsResult = await SkillsModel.create({ ...req.body });
  if (!skillsResult) {
    return res.status(404).json("Error creating new skills");
  } else {
    return res.status(201).json("skills created successfully!");
  }
};

// GET  all blogs
export const getAllSkills = async (req, res) => {
  const getResults = await SkillsModel.find();
  if (getResults.length === 0) {
    return res.status(404).json("No data found");
  } else {
    return res.status(200).json(getResults);
  }
};

// UPDATE all blogs
export const updateAllSkills = async (req, res) => {
  const updateResults = await SkillsModel.updateMany();
  if (!updateResults) {
    return res.status(404).json("No skills found!");
  } else {
    return res.status(200).json("Updated successfully");
  }
};

// DELETE all blogs
export const deleteAllSkills = async (req, res, next) => {
  try {
    const removeResult = await SkillsModel.deleteMany();
    return res.status(200).json(removeResult);
  } catch (error) {
    next(error);
  }
};

// GET one blog by id
export const getOneSkills = async (req, res, next) => {
  try {
    const getOneResult = await SkillsModel.findOne();
    if (!getOneResult) {
      return res
        .status(404)
        .json(`The award with the given ID:${req.params.id} was not found.`);
    } else {
      res.status(200).json(getOneResult);
    }
  } catch (error) {
    next(error);
  }
};

// UPDATE one blog by id
export const updateOneSkills = async (req, res, next) => {
  try {
    const updateOneResult = await SkillsModel.findByIdAndUpdate({
      _id: req.params.id,
    });
    if (!updateOneResult) {
      return res
        .status(404)
        .json(`The award with the given ID:${req.params.id} was not found.`);
    } else {
      res.status(200).json("Updated successfully");
    }
  } catch (error) {
    next(error);
  }
};

//  DELETE one blog by id
export const deleteOneSkills = async function (req, res) {
  const removeOnedskills = await SkillsModel.findByIdAndDelete();
  if (!removeOnedskills) {
    return res
      .status(404)
      .json(`The award with the given ID:${req.params.id} was not found.`);
  } else {
    return res.status(200).json("Deleted Successfully!");
  }
};
