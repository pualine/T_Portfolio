import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard';
import AdminDashboard from './pages/dashboardtest/test';
import Test2 from './pages/dashboardtest/test2';

const router = createBrowserRouter(
  [
    // {path:'/', element: <Home/>}
    {path:'/dashboard', element: <Dashboard/>},
    {path:'/admindashboard', element:<AdminDashboard/>},
    {path:'/test2', element:<Test2/>},

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
