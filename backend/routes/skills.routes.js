import { Router } from "express";
import { deleteAllSkills, deleteOneSkills, getAllSkills, getOneSkills, postskills, updateAllSkills, updateOneSkills } from "../controllers/skills.controllers.js";



// initialize router
const router = Router();


// Define routes

router.post('/', postskills)

// Get all blog
router.get('/', getAllSkills);

// update all blog
router.patch('/', updateAllSkills);

// Delete all blogs
router.delete('/', deleteAllSkills);

// Get a single blog
router.get('/:id', getOneSkills);

// delete one blog
router.delete('/:id', deleteOneSkills);
// update one blog
router.patch('/:id', updateOneSkills);

export default router;