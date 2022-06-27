import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from "../src/Pages/Home";
import Index from "../src/Pages/Index";
import NotFound from "../src/Pages/NotFound";
export const AppRoutes = () => {
    return (<> 
            <Routes>
            <Route path="/" component={Index}> </Route>
            <Route path="/home" component={Home}> </Route>
            <Route path="*" component={NotFound}> </Route>
          </Routes>
            </>
    )
}
