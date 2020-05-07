// This Apps Imports
import React from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './App.scss'
import Home from './Components/Pages/index.js';
import CompLayout from './Components/Templates/component_wiki/';

// Component Example Imports
import { Button } from 'blackburn-comp-library';
import 'blackburn-comp-library/dist/index.scss';

const App = () => {
  return (
  <BrowserRouter>
    <header>
      <h1>Gli7ched's Component Library</h1>
    </header>
    <main>
      <aside className="mainSidebar">
        <h2>Component Navigation</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <Switch className="mainBody">
        <Route path="/button">
          <CompLayout />
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
