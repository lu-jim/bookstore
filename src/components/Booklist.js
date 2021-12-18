import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './newBook';
import { getBooks } from '../redux/books/books';

const Booklist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  const booklist = useSelector((state) => state.bookReducer);
  const newList = booklist.map((book) => (
    <Book
      title={book.title}
      author={book.author}
      key={book.id}
      id={book.id}
      category={book.category}
    />
  ));
  return (
    <>
      <div id="books" className="bg-stone-100 mx-auto flex flex-col h-screen">
        <div className="container flex justify-center w-full self-center flex-col">
          { newList || ''}
          <Form />
        </div>
      </div>
    </>
  );
};

export default Booklist;
