import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const uniqueId = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).slice(2);
  return dateString + randomness;
};

const categories = ['Romance', 'Mystery', 'Fantasy', 'Non-Fiction', 'Technical'];

const Form = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    title: '',
    category: 'Romance',
  });
  const changeHandler = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitBookToStore = () => {
    const { title, category } = state;
    const newId = uniqueId();
    const newBook = {
      newId,
      title,
      category,
    };
    dispatch(addBook(newBook));
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
        <form
          className="flex container justify-between grow"
          onSubmit={(e) => {
            e.preventDefault();
            submitBookToStore();
          }}
        >
          <input type="text" name="title" placeholder="Book title" className={inputButton} value={state.title} onChange={changeHandler} required />
          <select name="category" placeholder="Category" className={inputButton} onChange={changeHandler}>
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
