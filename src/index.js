import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {
  BrowserRouter as Router,
  Link,
  NavLink
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="app-shell">
        <header className="topbar">
          <div className="topbar-inner">
            <Link className="brand" to="/">
              EZ<span>Beatz</span>
            </Link>
            <nav className="topnav">
              <NavLink className="topnav-link" activeClassName="active" to="/pack/gabriel">
                Gabriel
              </NavLink>
              <NavLink className="topnav-link" activeClassName="active" to="/pack/parker">
                Parker
              </NavLink>
              <NavLink className="topnav-link" activeClassName="active" to="/pack/angela">
                Angela
              </NavLink>
            </nav>
          </div>
        </header>
        <main className="app-main">
          <App />
        </main>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
