import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import TaskDetailsPage from './components/container/TaskDetailsPage/TaskDetails';
import HomePage from './components/container/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" exact component={HomePage} />
        <Route exact path="/users/12/todo-board" exact component={TaskDetailsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
