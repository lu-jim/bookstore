import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

import Form from './newBook';

const Books = () => {
  const list = useSelector((state) => state.books);
  const bookList = list.map((book) => (
    <Book
      title={book.title}
      author={book.author}
      key={book.id}
      id={book.id}
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
