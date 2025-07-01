import { Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Book Manager App</h1>
        <Link to="/add-book" className="bg-green-500 text-white px-4 py-2 rounded">+ Add Book</Link>
      </header>
      <AppRoutes />
    </div>
  );
}

export default App;
