import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/dev/:id" component={Main} />
    </BrowserRouter>
  );
}

export default Routes;
