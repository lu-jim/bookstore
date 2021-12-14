import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './components/Home';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <nav id="navbar">
        <h1 className="nav-title"> <Link to="/">Home</Link> </h1>
        <ul className="navlist">
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
        </header>
      </div>
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
