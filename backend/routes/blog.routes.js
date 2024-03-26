import { Router } from "express";
import {
  deleteAllBlogs,
  deleteOneBlog,
  getAllBlogs,
  getOneBlog,
  postBlog,
  updateAllBlogs,
  updateOneBlog,
} from "../controllers/blog.controllers.js";
import multer from "multer";

// create multer upload  middleware
const upload = multer({ dest: "uploads/" });

// create blog router
const router = Router();

// Define routes

router.post("/", upload.single("image"), postBlog);

// Get all blog
router.get("/", getAllBlogs);

// update all blog
router.patch("/", updateAllBlogs);

// Delete all blogs
router.delete("/", deleteAllBlogs);

// Get a single blog
router.get("/:id", getOneBlog);

// delete one blog
router.delete("/:id", deleteOneBlog);
// update one blog
router.patch("/:id", updateOneBlog);

export default router;
