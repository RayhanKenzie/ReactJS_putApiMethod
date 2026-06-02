import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Profile from '../pages/Profile.jsx'
import Contact from '../pages/Contact.jsx'
import NotFound from '../pages/not-found.jsx'
import Delete from '../pages/Delete.jsx'

export default function Router() {
    const router = createBrowserRouter([
        {
            path: '*',
            element: <NotFound/>
        },
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/profile',
            element: <Profile/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
            path: '/delete',
            element: <Delete/>
        }
    ])

    return <RouterProvider router={router}/>
}