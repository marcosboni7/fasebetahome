import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Produtos from "./Produtos";
import Usuario from "./Usuario";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Produtos }  path="/produtos" />
           <Route component = { Usuario }  path="/usuario" />
       </BrowserRouter>
   )
}

export default Routes;