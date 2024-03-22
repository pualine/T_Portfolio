import { AwardModel } from "../models/awards.models.js";


// Add  a new award to the database
export const AddAwards = async (req, res) => {
  const addResults = await AwardModel.create(req.body);
  res.status(201).json(addResults);
};


// Get all  awards in the database
export const GetAllAwards = async (req, res) => {
  const findResults = await AwardModel.find();
  res.status(200).json(findResults);
};

// Get a single award
export const GetOneAwards = async (req, res) => {
  const findOneResults = await AwardModel.findOne();
  res.status(200).json(findOneResults);
};

// Delete one awards
export const DeleteOneAward = async (req, res) => {
  const DeleteOneResults = await AwardModel.deleteOne();
  res.status(204).json(DeleteOneResults);
};

// Delete all  awards in the database
export const DeleteAllAwards = async (req, res) => {
  const DeleteAllResults = await AwardModel.deleteMany();
  res.status(204).json(DeleteAllResults);
};

// Update a single award
export const UpdateOneAwards = async (req, res) => {
  const UpdateOneResults = await AwardModel.updateOne();
  res.status(200).json(UpdateOneResults);
  };

  // Update all awards in database
  export const UpdateAllAwards = async (req, res) => {
    const UpdateResults = await AwardModel.updateMany();
    res.status(200).json(UpdateResults);
  };




  


