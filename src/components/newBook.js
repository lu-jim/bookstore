import React from 'react';

const Form = () => {
  const inputButton = `block px-3 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
  invalid:border-pink-500 invalid:text-pink-600
  focus:invalid:border-pink-500 focus:invalid:ring-pink-500`;
  return (
    <div className="flex flex-col container ">
      <h2 className="text-md uppercase font-bold text-gray-500"> Add New Book</h2>
      <div className="flex justify-between w-full">
        <input type="text" name="book" placeholder="Book title" className={inputButton} />
        <input type="dropdown" name="category" placeholder="Category" className={inputButton} />
        <button
          type="button"
          href="#"
          className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-8"
        >
          Add Book
        </button>
      </div>
    </div>
  );
};

export default Form;
