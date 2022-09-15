import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { routes } from "./config/routes";
import './App.css';
import {CategoryPage} from './pages/category'
import {CarProfile} from './pages/car-profile'
import AppLayout from "./pages/app-layout";
import NotFound from "pages/not-found";

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path={routes.root} element={<AppLayout/>}>
          <Route index element={<CategoryPage/>} />
          <Route path={routes.profile.schema} element={<CarProfile />} />

       </Route>
       <Route path='*' element={<NotFound />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
