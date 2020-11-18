import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { MainProvider } from "./components/MainProvider";

ReactDOM.render(
  <React.StrictMode>
    <MainProvider>
      <Router>
        <div className="container-fluid">
          <nav className="nav navbar navbar-dark bg-dark">
            <Link to="/german" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/lessonsMain" className="nav-item nav-link">
              Lessons
            </Link>
            <Link to="/grammaryMain" className="nav-item nav-link">
              Grammary
            </Link>
            <Link to="/pronounceMain" className="nav-item nav-link">
              Pronounce
            </Link>
            <Link to="/cardsMain" className="nav-item nav-link">
              Cards
            </Link>
            <Link to="/testMain" className="nav-item nav-link">
              Test
            </Link>
          </nav>
        </div>
        <App />
      </Router>
    </MainProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
