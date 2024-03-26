import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';

const router = createBrowserRouter(
  [
    {path:'/', element: <Home/>}
  ]
)

function App() {
  return (
   <>
   <Navbar/>
   <RouterProvider router={router}/>
    </>
  );
}

export default App;
