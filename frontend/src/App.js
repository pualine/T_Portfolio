
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/admin_dashboard/dashboard/index.jsx';
import AddSkill from './pages/admin_dashboard/add_items/add_skill.jsx';
import AddBlog from './pages/admin_dashboard/add_items/add_blog.jsx';
import EditSkill from './pages/admin_dashboard/edit_items/edit_skill.jsx';
import EditAchievement from './pages/admin_dashboard/edit_items/edit_achievement.jsx';
import AddAchievement from './pages/admin_dashboard/add_items/add_achievement.jsx';
import AllSKills from './pages/admin_dashboard/alldetails/all_skills.jsx';
import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import Blog from "./components/blog/Blog";



const router = createBrowserRouter(
  [
    // {path:'/', element: <Home/>}
    {path:'/dashboard', element: <Dashboard/>},
    {path:'/addskill', element: <AddSkill/>},
    {path:'/addachievement', element: <AddAchievement/>},
    {path:'/addblog', element: <AddBlog/>},
    {path:'/skills/:id', element: <EditSkill/>},
    {path:'/achievements/:id', element: <EditAchievement/>},
    {path:'/skills', element: <AllSKills/>},

   
  ]
)


function App() {
  return (
    <>
    <RouterProvider router={router}/>,
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Blog/>
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
    </>

  );
}

export default App;
