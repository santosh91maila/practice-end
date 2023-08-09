import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Anusha } from './common/main/anusha/Anusha';
import { Header } from './common/Header/Header';
import { Content } from './common/content/Content';
import { Home } from './common/home/Home';
import 'bootstrap/dist/css/bootstrap.css';
//import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    path: "/Anusha",
    element: <Anusha/>,
  },
  {
    path: "/",
    element: <Home/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider   router={router}> 
      <App />
    </RouterProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
