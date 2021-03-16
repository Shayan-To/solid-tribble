import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";
import { App } from "./app";

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
);
