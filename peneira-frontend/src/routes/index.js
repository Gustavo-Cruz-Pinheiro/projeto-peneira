import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Route from "./Route";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Main from "../pages/Main";
import CadPeneiras from "../pages/CadPeneiras";
import VerPeneiras from "../pages/VerPeneiras";
import Error404 from "../pages/Error404";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />

        <Route path="/Home" component={Home} isPrivate />
        <Route path="/cadpeneiras" component={CadPeneiras} isPrivate />
        <Route path="/verpeneiras" component={VerPeneiras} isPrivate />

        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}
