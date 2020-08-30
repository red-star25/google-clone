import React from 'react';
import './App.css';
import Home from "./pages/Home"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from "./components/SearchPage"

function App() {
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route path="/search">
          {/* SearchPage/ResultPage */}
          <SearchPage/>
        </Route>
        <Route path="/">
          {/* HomePage */}
          <Home/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
