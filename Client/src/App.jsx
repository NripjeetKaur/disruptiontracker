import './App.css'
import DisruptionTracker from './DisruptionTracker'
import RoutesPage from './RoutesPage'
import NewsFeedMore from './NewsFeedMore'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


export default function App () {
    const router = createBrowserRouter([
    {
      path: '/',
      element: <><DisruptionTracker /></>
    },
    {
      path: '/api/ReRoutesPage',
      element: <><RoutesPage /></>
    },
    {
      path: '/api/NewsFeedMore/:id',
      element: <><NewsFeedMore /></>
    }
  ])


    return (
        <div className='App'>
            <RouterProvider router={router} />
        </div>
    );
}

