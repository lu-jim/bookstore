import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Books from './components/Booklist';
import Categories from './components/Categories';
import user from './user.png';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <nav id="navbar" className="bg-white text-slate-500 font-serif flex justify-between p-6 text-center align-baseline">
          <div className="flex gap-10 items-center">
            <h1 className="text-blue-400 text-3xl font-bold"> Bookstore CMS </h1>
            <ul className="flex justify-evenly gap-8">
              <li className="hover:text-orange-300 uppercase tracking-wide">
                <Link to="/">Books</Link>
              </li>
              <li className="hover:text-orange-300 uppercase tracking-wide ">
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
          </div>

          <div className="flex mr-16 self-end">
            <img src={user} alt="user logo" className="logo" />
          </div>
        </nav>
        <Routes>
          <Route path="/categories" element={<Categories />} />
          <Route path="/" element={<Books />} />
        </Routes>
      </Router>
    </Provider>

  );
}

export default App;
