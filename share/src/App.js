import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/Login';

import RootLayout from './Pages/RootLayout';
import Home from './Components/Home';
const router = createBrowserRouter([
  {path: '/',
   element: <RootLayout/>,
  children:[
    {path:'/',element:<Login/>},
    {path:'/home',element:<Home/>},
  ]},
  ,
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;