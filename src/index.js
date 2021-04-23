import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
//import MusicTest from './MusicTest';
// ReactDOM.render(<React.StrictMode>
//   <MusicTest/>
//   </React.StrictMode>,
//   document.getElementById("root")
// )
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="App bg-dark container-fluid text-light">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/home">
              EZBeatz
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/gabriel"
                  >
                    Gabriel's Samples
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/parker"
                  >
                    Parker's Samples
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/angela"
                  >
                    Angela's Samples
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <App />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();