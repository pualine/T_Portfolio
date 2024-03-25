import { AwardModel } from "../models/awards.models.js";

// Add new awards to the database
export const AddAwards = async (req, res, next) => {
  try {
    const addResults = await AwardModel.create(req.body);
      return res.status(201).json("Awards created successfully!");
  } catch (error) {
    next(error);
  }
};

// Get all  awards in the database
export const GetAllAwards = async (req, res, next) => {
  try {
    const findResults = await AwardModel.find();
    // If no results found, send a 404 error message
    if (findResults.length === 0 ) {
      return res.status(404).json( "No Awards Found");
    } else {
      return res.status(200).json(findResults);
    }
  } catch (error) {
    next(error);
  }
};

// Get a single award
export const GetOneAwards = async (req, res, next) => {
  try {
    const findOneResults = await AwardModel.findById({ _id: req.params.id });
    if (findOneResults === null) {
      res
        .status(404)
        .json({ message: `could not find award with ID:${req.params.id}` });
    } else {
      return res.status(200).json(findOneResults);
    }
  } catch (error) {
    next(error);
  }
};

// Delete one awards
export const DeleteOneAward = async (req, res, next) => {
  try {
    const DeleteOneResults = await AwardModel.findByIdAndDelete({
      _id: req.params.id,
    });
    if (!DeleteOneResults) {
      return res
        .status(404)
        .json(`The award with the given ID:${req.params.id} was not found.`);
    } else {
      return res.status(200).json(`The award with the given ID:${req.params.id} was deleted!`);
    }
  } catch (error) {
    next(error);
  }
};

// Delete all  awards in the database
export const DeleteAllAwards = async (req, res, next) => {
  try {
    const DeleteAllResults = await AwardModel.deleteMany();
    return res.status(200).json("All awards were deleted succefully!");
  } catch (error) {
    next(error);
  }
};

// Update a single award
export const UpdateOneAwards = async (req, res, next) => {
  try {
    const UpdateOneResults = await AwardModel.findByIdAndUpdate({
      _id: req.params.id,
    });
    // Check to see if there is an item with that id number exits
    if (!UpdateOneResults) {
      return res.status(404).json(`No award with this ID:${req.params.id} updated!`);
    } else {
      // If it does exist then update it with new data
      return res.status(200).json(UpdateOneResults);
    }
  } catch (error) {
    next(error);
  }
};

// Update all awards in database
export const UpdateAllAwards = async (req, res, next) => {
  try {
    const UpdateResults = await AwardModel.updateMany();
    //  check if  any items were updated
    if (!UpdateResults.modifiedCount) {
      return res.status(204).json("No awards were updated");
    } else {
      return res
        .status(200)
        .json(
          `${UpdateResults.modifiedCount} awards were successfully updated.`
        );
    }
  } catch (error) {
    next(error);
  }
};
