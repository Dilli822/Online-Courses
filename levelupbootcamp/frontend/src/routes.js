// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TodoList from './components/apps/todoApp/todoList';

const MainRouter = () => {

  return (
    <Router>
      <Routes>
        <Route
          path="/todoList"
          element={<TodoList />}
        />
 
      </Routes>
    </Router>
  );
};

export default MainRouter;
