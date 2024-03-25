import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard';

const router = createBrowserRouter(
  [
    // {path:'/', element: <Home/>}
    {path:'/dashboard', element: <Dashboard/>}

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
