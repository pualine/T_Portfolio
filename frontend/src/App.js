import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

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
