import { ExperienceModel } from "../models/experience.models.js";


// POST blog
export const postExperience = async(req, res) =>{
const experienceResult = await  ExperienceModel.create({...req.body});
if(!experienceResult){
    return res.status(404).json('Error creating new skills');
} else {
    return res.status(201).json('experience created successfully!');
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
export const  deleteAllExperience = async (req,res) =>{
    const  removeResult=await ExperienceModel.deleteMany();
     if(!removeResult){
         return res.status(404).json("No data found!");
     }else{
        return res.status(200).json(removeResult);
}
};

// GET one blog by id
export const getOneExperience = async(req , res)=>{
    const getOneResult = await ExperienceModel.findOne();
    if(!getOneResult){
        return res.status(404).json("The experience with the given ID was not found.")
    } else{
        res.status(200).json(getOneResult)
    };
}

// UPDATE one blog by id
export const updateOneExperience = async(req , res)=> {
    const updateOneResult = await ExperienceModel.updateOne();
    if(!updateOneResult){
        return res.status(400).json("Update failed.");
    }else{
       res.status(200).json('Updated successfully');
    }  
}

//  DELETE one blog by id
export const deleteOneExperience = async function(req, res){
    const removeOnedskills = await ExperienceModel.deleteOne();
    if (!removeOnedskills) {
        return res.status(400).json('Failed to Delete.');
    } else {
        return res.status(200).json('Deleted Successfully!')
    }
    };

    