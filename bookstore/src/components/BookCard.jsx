import { Link, useNavigate } from "react-router-dom";
import { deleteBookById } from "../utils/localStorageUtils";

const BookCard = ({ book }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this book?")) {
      deleteBookById(book.id);
      navigate(0); 
    }
  };

  return (
    <div className="bg-indigo-300 rounded-l shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105 overflow-hidden flex flex-col">
      <h2 className="text-xl font-bold">{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Price: ₹{book.price}</p>
      <div className="flex gap-4 mt-2">
        <Link to={`/book/${book.id}`} className="text-blue-500 underline">
          View Details
        </Link>
        <button onClick={handleDelete} className="text-red-500 underline">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;