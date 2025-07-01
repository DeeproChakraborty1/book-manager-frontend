import { useParams, useNavigate } from "react-router-dom";
import { getBookById } from "../utils/localStorageUtils";
import AIRecommendations from "../components/AIRecommendations";

const BookDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = getBookById(id);

  if (!book) return <div>Book not found</div>;

  return (
    <div className="max-w-2xl mx-auto">
      <button onClick={() => navigate("/")} className="text-blue-500 underline mb-4">← Back to Home</button>
      <h2 className="text-2xl font-bold">{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Price:</strong> ₹{book.price}</p>
      <p className="mt-2">{book.description}</p>
      <AIRecommendations title={book.title} author={book.author} />
    </div>
  );
};

export default BookDetailPage;