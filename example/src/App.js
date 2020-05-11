// This Apps Imports
import React from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './App.scss'
import Home from './Components/Pages/index.js';
import CompLayoutButton from './Components/Templates/component_wiki/Button.js';
import CompLayoutGlink from './Components/Templates/component_wiki/Glink.js';

// Component Example Imports

const App = () => {
  return (
  <BrowserRouter>
    <header>
      <h1>Gli7ched's Component Library</h1>
    </header>
    <main>
      <aside className="mainSidebar">
        <h2>Navigation</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <h3>Components</h3>
              <ul>
                <li><Link to="/button">Button</Link></li>
                <li><Link to="/glink">Anchor Tags</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <Switch className="mainBody">
        <Route path="/glink">
          <CompLayoutGlink />
        </Route>
        <Route path="/button">
          <CompLayoutButton />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  </BrowserRouter>
  )
}

export default App
