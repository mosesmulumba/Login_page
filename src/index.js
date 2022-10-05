//import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import  ReactDOM  from "react-dom";
import Login from "./App";
import Nav from "./nav";

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
      <Nav />
      <Login />
    </React.StrictMode>
)