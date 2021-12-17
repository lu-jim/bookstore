import React from 'react';
import styles from './Books.module.css';
import progress from '../progress.svg';
import Form from './Form.js';

const Books = () => {
  const dummyList = [
    { title: 'The Hunger Games', author: 'Suzanne Collins', category: 'Action', completed: '64%', currentChapter: 'Chapter 17' },
    { title: 'Dune', author: 'Frank Hebert', category: 'Science Fiction', completed: '8%', currentChapter: 'Chapter 3' },
    { title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins', category: 'Economy', completed: '0%', currentChapter: 'Introduction' },
  ];
  return (
    <>
      <div id="books" className="bg-stone-100 mx-auto flex flex-col h-screen">
        <div className="container flex justify-center w-full self-center flex-col">
          <div className="card bg-white shadow-md rounded-md max-w-l -mr-1 h-70 tracking-tight w-full flex justify-between p-6 my-8">
            <div className="font-display">
              <h3 className="font-bold font-serif text-gray-400 text-sm">{dummyList[0].category}</h3>
              <h2 className="text-xl font-bold">{dummyList[0].title}</h2>
              <p className="text-gray-400 text-sm"> {dummyList[0].author}</p> <p className="text-gray-400 text-sm"> Comments | Remove | Edit</p>
            </div>
            <div className="flex items-center">
              <img src={progress} alt="progress" />

              <div className="p-4  font-serif">
                <p className="text-2xl"> {dummyList[0].completed}</p>
                <p className="text-gray-400 text-sm"> Completed</p>
              </div>
            </div>
            <div className="flex flex-col w-fit font-display">
              <h2 className="text-gray-400 uppercase text-xs">Current Chapter</h2>
              <p className="text-sm mb-4"> {dummyList[0].currentChapter}</p>
              <button
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-8">
                Update Progress
              </button>
            </div>
          </div>
          <div className="card bg-white shadow-md rounded-md max-w-l -mr-1 h-70 tracking-tight w-full flex justify-between p-6 my-8">
            <div className="font-display">
              <h3 className="font-bold font-serif text-gray-400 text-sm">{dummyList[1].category}</h3>
              <h2 className="text-xl font-bold">{dummyList[1].title}</h2>
              <p className="text-gray-400 text-sm"> {dummyList[1].author}</p> <p className="text-gray-400 text-sm"> Comments | Remove | Edit</p>
            </div>
            <div className="flex items-center">
              <img src={progress} alt="progress" />

              <div className="p-4  font-serif">
                <p className="text-2xl"> {dummyList[1].completed}</p>
                <p className="text-gray-400 text-sm"> Completed</p>
              </div>
            </div>
            <div className="flex flex-col w-fit font-display">
              <h2 className="text-gray-400 uppercase text-xs">Current Chapter</h2>
              <p className="text-sm mb-4"> {dummyList[1].currentChapter}</p>
              <button
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-8">
                Update Progress
              </button>
            </div>
          </div>
          <div className="card bg-white shadow-md rounded-md max-w-l -mr-1 h-70 tracking-tight w-full flex justify-between p-6 my-8">
            <div className="font-display">
              <h3 className="font-bold font-serif text-gray-400 text-sm">{dummyList[2].category}</h3>
              <h2 className="text-xl font-bold">{dummyList[2].title}</h2>
              <p className="text-gray-400 text-sm"> {dummyList[2].author}</p> <p className="text-gray-400 text-sm"> Comments | Remove | Edit</p>
            </div>
            <div className="flex items-center">
              <img src={progress} alt="progress" />

              <div className="p-4  font-serif">
                <p className="text-2xl"> {dummyList[2].completed}</p>
                <p className="text-gray-400 text-sm"> Completed</p>
              </div>
            </div>
            <div className="flex flex-col w-fit font-display">
              <h2 className="text-gray-400 uppercase text-xs">Current Chapter</h2>
              <p className="text-sm mb-4 w-2/6"> {dummyList[2].currentChapter}</p>
              <button
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-8">
                Update Progress
              </button>
            </div>
          </div>{' '}
          <Form />
        </div>
      </div>
    </>
  );
};

export default Books;
