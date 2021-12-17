import React from 'react';
import PropTypes from 'prop-types';
import progress from '../progress.svg';

const Book = ({
  title, author, category, completed, currentChapter,
}) => (
  <div className="card bg-white shadow-md rounded-md max-w-l -mr-1 h-70 tracking-tight w-full flex justify-between p-6 my-8">
    <div className="font-display">
      <h3 className="font-bold font-serif text-gray-400 text-sm">{category}</h3>
      <h2 className="text-xl font-bold w-80">{title}</h2>
      <p className="text-gray-400 text-sm">{author}</p>
      <p className="text-gray-400 text-sm"> Comments | Remove | Edit</p>
    </div>
    <div className="flex items-center">
      <img src={progress} alt="completed" />

      <div className="p-4  font-serif">
        <p className="text-2xl">{completed}</p>
        <p className="text-gray-400 text-sm"> Completed</p>
      </div>
    </div>
    <div className="flex flex-col w-fit font-display">
      <h2 className="text-gray-400 uppercase text-xs">Current Chapter</h2>
      <p className="text-sm mb-4">
        {' '}
        {currentChapter}
      </p>
      <button
        href="#"
        type="button"
        className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-400 dark:focus:ring-blue-800 px-8"
      >
        Update completed
      </button>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
  currentChapter: PropTypes.string.isRequired,
};

export default Book;