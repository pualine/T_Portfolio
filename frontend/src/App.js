
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
import LandingPage from './pages/landingpage/index.jsx';




const router = createBrowserRouter(
  [
    {path:'/', element: <LandingPage/>},
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
    </>

  );
}

export default App;
