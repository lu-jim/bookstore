import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import Books from './components/Booklist';
import Categories from './components/Categories';
import user from './solid_user-circle.svg';

function App() {
  return (
    <Router>
      <nav id="navbar" className="bg-white text-slate-500 font-serif flex justify-between p-6 text-center">
        <h1 className="text-blue-400 text-3xl font-bold"> Bookstore CMS </h1>
        <ul className="flex justify-evenly gap-8">
          <li className="hover:text-orange-300 uppercase tracking-wide">
            <Link to="/">Books</Link>
          </li>
          <li className="hover:text-orange-300 uppercase tracking-wide ">
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
        <div className="bg-black">
          <img src={user} alt="user logo" />
        </div>
      </nav>
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/" element={<Books />} />
      </Routes>
    </Router>
  );
}

export default App;
