import { Router } from "express";
import { deleteAllExperience, deleteOneExperience, getAllExperience, getOneExperience, postExperience, updateAllExperience, updateOneExperience } from "../controllers/experience.controllers.js";

// initialize router
const router = Router();


// Define routes

router.post('/', postExperience)

// Get all blog
router.get('/', getAllExperience);

// update all blog
router.patch('/', updateAllExperience);

// Delete all blogs
router.delete('/', deleteAllExperience);

// Get a single blog
router.get('/:id' , getOneExperience);

// delete one blog
router.delete('/:id', deleteOneExperience);
// update one blog
router.patch('/:id', updateOneExperience);

export default router;