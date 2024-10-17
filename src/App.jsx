import Navbar from './components/Navbar'
import Tasks from './components/Tasks'
import Signin from './components/Signin'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Outlet />
        </>
      ),
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'tasks',
          element: <Tasks />
        },
        {
          path: 'signin',
          element: <Signin />
        }]
    }
  ]);
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


export default App
