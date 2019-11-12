import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import "./index.css";
import App from "./App";
import Router from './Router';
//import Notification from "./components/Notification";

const Main = () => (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
)

ReactDOM.render(<Main />, document.getElementById("root"));
// ReactDOM.render(<Notification />, document.getElementById("portal"));
