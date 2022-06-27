import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from "src/pages/Home.js";
import Index from "src/pages/Index.js";
import NotFound from "src/pages/NotFound.js";
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
