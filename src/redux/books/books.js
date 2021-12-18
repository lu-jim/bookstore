import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0jjsHMNWVIHBNTNPORgL/books/';

const initialState = [];

export const getBooks = () => async (dispatch) => {
  const result = await axios.get(url);
  const books = result.data;
  const allBooks = Object.entries(books);
  const bookPackage = [];
  allBooks.forEach(([key, book]) => {
    const id = key;
    const { title, category } = book[0];
    bookPackage.push({ id, title, category });
  });
  dispatch({
    type: GET_BOOKS,
    bookPackage,
  });
};

export const addBook = ({ id, title, category }) => async (dispatch) => {
  const result = await axios.post(url, {
    item_id: id,
    title,
    category,
  });
  if (result.data === 'Created') {
    dispatch({
      type: ADD_BOOK,
      book: { id, title, category },
    });
  }
};

export const removeBook = (id) => async (dispatch) => {
  const result = await axios.delete(`${url}${id}`, {
    headers: {
      'content-type': 'application/json',
    },
  });
  const deleted = await result.data;
  if (deleted) {
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  }
};

const reducer = (state = initialState, {
  type, book, id, bookPackage,
}) => {
  switch (type) {
    case ADD_BOOK: return [...state, book];
    case REMOVE_BOOK: return state.filter((book) => book.id !== id);
    case GET_BOOKS: return [...state, ...bookPackage];
    default: return state;
  }
};

export default reducer;
