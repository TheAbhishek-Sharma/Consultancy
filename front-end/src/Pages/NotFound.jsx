import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl font-semibold mt-2">Page Not Found</h2>
      <p className="text-gray-500 mt-2">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
