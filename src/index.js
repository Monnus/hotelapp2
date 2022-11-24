import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.render(
    <Router>
    <App />
    </Router>
 , document.getElementById("root")
);