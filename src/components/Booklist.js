import React from 'react';
import Book from './Book';

import Form from './newBook';

const uniqueId = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

const Books = () => {
  const dummyList = [
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      completed: '64%',
      currentChapter: 'Chapter 17',
    },
    {
      title: 'Dune',
      author: 'Frank Hebert',
      category: 'Science Fiction',
      completed: '8%',
      currentChapter: 'Chapter 3',
    },
    {
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
      completed: '0%',
      currentChapter: 'Introduction',
    },
  ];

  const bookList = dummyList.map((book) => (
    <Book
      title={book.title}
      author={book.author}
      key={uniqueId()}
      category={book.category}
      completed={book.completed}
      currentChapter={book.currentChapter}

    />
  ));
  return (
    <>
      <div id="books" className="bg-stone-100 mx-auto flex flex-col h-screen">
        <div className="container flex justify-center w-full self-center flex-col">
          {bookList}
          {' '}
          <Form />
        </div>
      </div>
    </>
  );
};

export default Books;
