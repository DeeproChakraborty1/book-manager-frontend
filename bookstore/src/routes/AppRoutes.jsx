import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddBookPage from "../pages/AddBookPage";
import BookDetailPage from "../pages/BookDetailPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/add-book" element={<AddBookPage />} />
    <Route path="/book/:id" element={<BookDetailPage />} />
  </Routes>
);

export default AppRoutes;