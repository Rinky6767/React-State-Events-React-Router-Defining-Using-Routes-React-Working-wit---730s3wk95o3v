import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from "../src/Pages/Home";
import Index from "../src/Pages/Index";
import NotFound from "../src/Pages/NotFound";
export const AppRoutes = () => {
    return (<nav> 
            <Routes>
            <Route path="/" element={<Index/>} exact> </Route>
            <Route path="/home" element={<Home/>} exact> </Route>
            <Route path="*" element={<NotFound/>}> </Route>
          </Routes>
            </nav>
    )
}
