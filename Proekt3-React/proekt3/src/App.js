
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './components/RootLayout';
import AuthPage, {action as authAction} from './components/AuthPage';
import HomePage from './components/HomePage';
import MealsPage, {loader as mealsLoader} from './components/MealsPage';
import PopupMeals  from './components/PopupMeals';
import {action as createAction} from './components/PopupMeals';
import MealItems ,{loader as mealItemLoader,action as mealsAction} from './components/MealItems';
import { getAuthToken, checkAuthLoader  } from "./util/auth";

import MealsCalendar from './components/MealsCalendar';
import BlogPage from './components/BlogPage';


const router = createBrowserRouter([

  {
    path: "/",
    element: <RootLayout />,
    loader: getAuthToken,
    children:[
      {
        path: "auth",
        element: <AuthPage />,
        action:authAction,
       
      },
      {
        path: "/",
        element: <HomePage/>,
        loader:checkAuthLoader
        
      },
      {
        path:"meals",
        loader:checkAuthLoader,
        children:[
          {
            index:true,
            element: <MealsPage/>,
            id:"mealsId",
            loader:mealsLoader,
          },
          {
            path:"popup", 
            children:[
              {
                index:true,
                element: <PopupMeals/> ,
                action:createAction,
                
              },
            {
              path:"mealItem",
              element:<MealItems/>,
              loader: mealItemLoader,
              action: mealsAction,
            }
           
            ]
          },
        
        ]
      },
      {
        path:"calendar",
        element:<MealsCalendar/>,
        loader:checkAuthLoader,
      },
      {
        path:"blog",
        element:<BlogPage/>,
        loader:checkAuthLoader,
      }
    ]
    
  }
])

function App() {
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
