import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/admin_dashboard/dashboard/index.jsx';
import AddSkill from './pages/admin_dashboard/add_items/add_skill.jsx';
import AddBlog from './pages/admin_dashboard/add_items/add_blog.jsx';
import EditSkill from './pages/admin_dashboard/edit_items/edit_skill.jsx';
import EditAchievement from './pages/admin_dashboard/edit_items/edit_achievement.jsx';
import AddAchievement from './pages/admin_dashboard/add_items/add_achievement.jsx';



const router = createBrowserRouter(
  [
    // {path:'/', element: <Home/>}
    {path:'/dashboard', element: <Dashboard/>},
    {path:'/addskill', element: <AddSkill/>},
    {path:'/addachievement', element: <AddAchievement/>},
    {path:'/addblog', element: <AddBlog/>},
    {path:'/editskill', element: <EditSkill/>},
    {path:'/achievements/:id', element: <EditAchievement/>},

  ]
)

function App() {
  return (
   <>
   {/* <Navbar/> */}
   <RouterProvider router={router}/>
    </>
  );
}

export default App;
