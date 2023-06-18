import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/Login';

import RootLayout from './Pages/RootLayout';
import Home from './Components/Home';
import Profile from './Components/Profile';
import ImageUpload from './Components/ImageUpload';


const router = createBrowserRouter([
  {path: '/',
   element: <RootLayout/>,
  children:[
    {path:'/',
      element:<Login/>
    },
    {path:'/home',
    element:<Home/>},
    {
      path:'/profile',
      element:<Profile/>
    },
    {
      path:'/upload',
      element:<ImageUpload/>
    }
  ]},
  ,
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;