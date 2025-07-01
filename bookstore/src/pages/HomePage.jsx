import { useState } from "react";
import { getBooks } from "../utils/localStorageUtils";
import BookCard from "../components/BookCard";
import BookFilter from "../components/BookFilter";
import BookSorter from "../components/BookSorter";

const HomePage = () => {
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("title");

  const books = getBooks();
  const genres = [...new Set(books.map(book => book.genre))];

  const filtered = books.filter(book => filter === "All" || book.genre === filter);
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "title") return a.title.localeCompare(b.title);
    if (sortBy === "price") return a.price - b.price;
  });

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <BookFilter categories={genres} selected={filter} onChange={setFilter} />
        <BookSorter value={sortBy} onChange={setSortBy} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sorted.map(book => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export default HomePage;