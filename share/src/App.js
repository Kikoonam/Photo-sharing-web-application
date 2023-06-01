import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/Login';
import HomePage from './Pages/HomePage'
import RootLayout from './Pages/RootLayout';

const router = createBrowserRouter([
  {path: '/',
   element: <RootLayout/>,
  children:[
    {path:'/',element:<Login/>},
  ]},
  ,
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;