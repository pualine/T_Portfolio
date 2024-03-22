import { Router } from "express";
import { AddAwards, DeleteAllAwards, DeleteOneAward, GetAllAwards, GetOneAwards, UpdateAllAwards, UpdateOneAwards } from "../controllers/award.controllers.js";


// Initialize router
const router  = Router();

// Import controllers 

// Define routes 
// post awards
router.post('/', AddAwards);
// Get all awards
router.get('/', GetAllAwards)
// Get a single award
router.get( '/:id', GetOneAwards);

// Delete ALL awards
router.delete("/", DeleteAllAwards)

//  Delete a single award
router.delete("/:id", DeleteOneAward);
// update all awards
router.patch('/', UpdateAllAwards)

// Update a single award
router.patch( '/:id', UpdateOneAwards);

export default router;
// Export router