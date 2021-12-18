import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const categories = ['Romance', 'Mystery', 'Fantasy', 'Non-Fiction', 'Technical'];

export const uniqueId = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).slice(2);
  return dateString + randomness;
};

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: uniqueId(),
      title,
      category,
      author: 'Anonymous',
      currentChapter: '',
      progress: 0,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('Category');
  };

  const inputButton = `block px-3 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
  invalid:border-pink-500 invalid:text-pink-600
  focus:invalid:border-pink-500 focus:invalid:ring-pink-500`;
  return (
    <div>
      <h2 className="text-md uppercase font-bold text-gray-500"> Add New Book</h2>
      <div className="flex justify-between w-full">
        <form className="flex container justify-between grow" onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Book title" className={inputButton} value={title} onChange={handleTitleChange} required />
          <input type="text" name="author" placeholder="Author" className={inputButton} value={author} onChange={handleAuthorChange} required />
          <select name="category" placeholder="Category" className={inputButton} onChange={handleCategoryChange} value={category}>
            {categories.map((category) => (
              <option key={uniqueId()} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-8"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
