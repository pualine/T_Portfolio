import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import awardsRoutes from "./routes/awards.routes.js";
import blogRoutes  from './routes/blog.routes.js';
import skillsRoutes from  './routes/skills.routes.js'; 
import experienceRoutes from  './routes/experience.routes.js' ;
// Load env variable
dotenv.config({path:['.env.local']});


// create express app
const app = express();

// use middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

// use routes 
app.use('/awards', awardsRoutes);
app.use('/blogs', blogRoutes);
app.use('/skills', skillsRoutes );
app.use('/experience', experienceRoutes );



// make connection
await mongoose.connect(process.env.MONGO_URI);

// listen to port
app.listen(4000, () =>{
    console.log('Portfolio app is running successfully on port 4000')
});

