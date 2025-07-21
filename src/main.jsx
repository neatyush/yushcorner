import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sales from './pages/Static Pages/Sales.jsx';
import Fandb from './pages/Static Pages/Fandb.jsx';
import Hr from './pages/Static Pages/Hr.jsx';
import Kitchen from './pages/Static Pages/Kitchen.jsx';
import Marketing from './pages/Static Pages/Marketing.jsx';
import Fo from './pages/Static Pages/Fo.jsx';
import Interview from './pages/Static Pages/Interview.jsx';
import GuestComplaint from './pages/Static Pages/ComplaintHandling.jsx';
import FoodWinePairing from './pages/Static Pages/FoodWinePairing.jsx';
import Wine from './pages/Static Pages/Wine.jsx';
import Cocktail from './pages/Static Pages/Cocktail.jsx';
import Cigar from './pages/Static Pages/Cigar.jsx';
import ErrorPage from '../src/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/sales',
    element: <Sales></Sales>
  },
   {
    path: '/fnb',
    element: <Fandb></Fandb>
  },
  {
    path: '/hr',
    element: <Hr></Hr>
  },
   {
    path: '/marketing',
    element: <Marketing></Marketing>
  },
  {
    path: '/frontoffice',
    element: <Fo></Fo>
  },
   {
    path: '/kitchen',
    element: <Kitchen></Kitchen>
  },
  {
    path: '/interview',
    element: <Interview></Interview>
  },
  {
    path: '/complainthandling',
    element: <GuestComplaint></GuestComplaint>
  },
  {
    path: '/winepairing',
    element: <FoodWinePairing></FoodWinePairing>
  },
  {
    path:'/wine',
    element: <Wine></Wine>
  },
  {
    path:'/cocktail',
    element: <Cocktail></Cocktail>
  },
   {
    path:'/cigar',
    element: <Cigar></Cigar>
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  
  
  
   
]);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
