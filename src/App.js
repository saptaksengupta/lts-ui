import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from 'react-router-dom';

import './App.css';
import TaskDetailsPage from './components/container/TaskDetailsPage/TaskDetails';
import HomePage from './components/container/HomePage/HomePage';
import ListItemPage from './components/container/LIstItemDetailsPage/LIstItemPage';
import { AuthContext } from './context/AuthContext';
function App() {

  const { authState } = useContext(AuthContext);

  const getProtectedRoute = (path, component, user) => {
    if (!user) {
      return <Redirect exact to="/" />;
    }
    return <Route exact path={path} component={component} />
  }

  const getUnProtectedRoutes = (path, component, redirectPath, user) => {
    if (user) {
      return <Redirect exact to={redirectPath} />
    }

    return <Route exact path={path} component={component} />
  }

  return (
    <BrowserRouter>
      <Switch>
        {getProtectedRoute('/user/todo-board', TaskDetailsPage, authState.user)}
        {getProtectedRoute('/boards/:boardId/lists', ListItemPage, authState.user)}
        {getUnProtectedRoutes('/', HomePage, '/user/todo-board', authState.user)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
