import { ExperienceModel } from "../models/experience.models.js";


// POST blog
export const postExperience = async(req, res, next) =>{
const experienceResult = await  ExperienceModel.create({...req.body});
    try {
        return res.status(201).json('experience created successfully!');
    } catch (error) {
        next(error);
    }
};

// GET  all blogs
export const getAllExperience = async (req, res) =>{
    const getResults = await ExperienceModel.find();
    if(getResults.length === 0){
        return res.status(404).json("No data found");
    } else{
        return res.status(200).json(getResults);
    }
};

// UPDATE all blogs
export const updateAllExperience = async (req,res) =>{
    const updateResults = await ExperienceModel.updateMany();
    if(!updateResults){
        return res.status(404).json('No experience found!')
    } else {
return  res.status(200).json(updateResults)};       
};

// DELETE all blogs
export const  deleteAllExperience = async (req,res, next) =>{
   try {
     const  removeResult=await ExperienceModel.deleteMany();
         return res.status(200).json("Deleted successfully!");
   } catch (error) {
    next(error)
   }
};

// GET one blog by id
export const getOneExperience = async(req , res, next)=>{
   try {
     const getOneResult = await ExperienceModel.findById({_id: req.params.id});
     if(!getOneResult){
         return res.status(404).json(`The experience with the given ID:${req.prams.id} was not found.`)
     } else{
         res.status(200).json(getOneResult)
     };
   } catch (error) {
    next(error)
   }
}

// UPDATE one blog by id
export const updateOneExperience = async(req , res)=> {
    const updateOneResult = await ExperienceModel.findByIdAndDelete({_id: req.params.id});
    if(!updateOneResult){
        return res
        .status(404)
        .json(`The award with the given ID:${req.params.id} was not found.`);
    }else{
       res.status(200).json('Updated successfully');
    }  
}

//  DELETE one blog by id
export const deleteOneExperience = async function(req, res){
    const removeOneExperience = await ExperienceModel.findByIdAndDelete({_id:req.params.id});
    if (!removeOneExperience) {
        return res.status(404).json(`The award with the given ID:${req.params.id} was not found.`);
    } else {
        return res.status(200).json('Deleted Successfully!')
    }
    };

    