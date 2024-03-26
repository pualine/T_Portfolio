import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/admin_dashboard/dashboard/index.jsx';
import AddSkill from './pages/admin_dashboard/add_items/add_skill.jsx';
import AddAchievement from './pages/admin_dashboard/add_items/add_achievement.jsx';



const router = createBrowserRouter(
  [
    // {path:'/', element: <Home/>}
    {path:'/dashboard', element: <Dashboard/>},
    {path:'/addskill', element: <AddSkill/>},
    {path:'/addachievement', element: <AddAchievement/>},

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
