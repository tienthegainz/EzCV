import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import DashboardPage from './pages/dashboard/DashboardPage';
import LandingPage from './pages/landing/LandingPage';
import ResumePage from './pages/resume/ResumePage';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/resume/:id">
          <ResumePage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
