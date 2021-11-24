import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { TodoList } from './pages/TodoList';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path='/' element={<TodoList />} />
    </Routes>
  </Router>
);

export default App;
