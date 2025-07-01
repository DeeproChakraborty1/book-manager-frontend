const STORAGE_KEY = "books";

export const getBooks = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const saveBooks = (books) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
};

export const addBook = (book) => {
  const books = getBooks();
  book.id = Date.now().toString();
  books.push(book);
  saveBooks(books);
};

export const getBookById = (id) => {
  return getBooks().find(book => book.id === id);
};

export const deleteBookById = (id) => {
  const books = getBooks().filter(book => book.id !== id);
  saveBooks(books);
};
