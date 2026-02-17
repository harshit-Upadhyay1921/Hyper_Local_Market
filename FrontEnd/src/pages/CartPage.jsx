// import { useEffect, useState } from "react";
// import { FaMapMarkerAlt } from "react-icons/fa";
//hi
// export default function CartPage() {
//   const [theme, setTheme] = useState("light");

//   const sales = [
//     {
//       _id: "sale1",
//       title: "Sample Product 1",
//       price: 150,
//       quantity: 2,
//       image: "https://via.placeholder.com/100"
//     },
//     {
//       _id: "sale2",
//       title: "Sample Product 2",
//       price: 300,
//       quantity: 1,
//       image: "https://via.placeholder.com/100"
//     },
//   ];

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme") || "light";
//     setTheme(storedTheme);
//   }, []);

//   return (
//     <div className={`min-h-screen transition-all duration-300 ${theme === "dark" ? "bg-green-950 text-white" : "bg-white text-black"}`}>
//       {/* Navbar */}
//       <nav className={`flex justify-between items-center px-8 py-4 shadow ${theme === "dark" ? "bg-green-900 text-white" : "bg-white text-black"}`}>
//         <div className="text-green-600 text-2xl font-bold flex items-center gap-2">
//           <FaMapMarkerAlt className="text-green-600" /> LocalLink
//         </div>

//         <div className="flex items-center space-x-4 w-1/2">
//           <select
//             className="p-2 border-2 border-green-400 rounded-full bg-white text-gray-700"
//           >
//             <option value="">All Categories</option>
//             <option value="electronics">Electronics</option>
//             <option value="clothing">Clothing</option>
//             <option value="groceries">Groceries</option>
//             <option value="others">Others</option>
//           </select>

//           <div className="relative w-full">
//             <input
//               type="text"
//               placeholder="Search shops or categories..."
//               className="w-full p-2 pl-10 border-2 text-black border-green-400 rounded-full focus:outline-none"
//             />
//             <span className="absolute left-3 top-2.5 text-green-500">🔍</span>
//           </div>
//         </div>
//       </nav>

//       <div className="p-6">
//         <h1 className="text-3xl font-bold mb-6">🛒 Shopping Cart</h1>

//         {sales.length === 0 ? (
//           <p className="text-lg text-gray-500">Your cart is currently empty.</p>
//         ) : (
//           <div className="grid gap-6">
//             {sales.map((sale) => (
//               <div
//                 key={sale._id}
//                 className={`rounded-2xl shadow-md p-4 flex gap-4 items-center justify-between ${theme === "dark" ? "bg-green-900 text-white" : "bg-green-100 text-black"}`}
//               >
//                 <div className="flex items-center gap-4">
//                   <img src={sale.image} alt={sale.title} className="w-24 h-24 object-cover rounded-xl" />
//                   <div>
//                     <h2 className="text-lg font-semibold">{sale.title}</h2>
//                     <p className="text-sm">Quantity: {sale.quantity}</p>
//                     <p className="text-sm">Price: ₹{sale.price}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <button className="bg-red-700 hover:bg-red-500 text-white px-3 py-1 rounded-xl text-lg">
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CartPage() {
  const [theme, setTheme] = useState("light");
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user cart from backend API
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);

    const fetchCart = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          "http://localhost:8000/api/v1/auth/usercart",
          { withCredentials: true }
        );

        // Assuming your backend response has shape { status, data, message }
        if (res.data?.status === 200 && Array.isArray(res.data.data)) {
          // IMPORTANT: adapt to your backend response shape if different
          setSales(res.data.data);
        } else {
          setError("Failed to load cart data.");
          setSales([]);
        }
      } catch (err) {
        setError("Error fetching cart data. Please try again.",err);
        setSales([]);
      }
      setLoading(false);
    };

    fetchCart();
  }, []);

  // Calculate total price
  // Assuming your backend sales items have price and quantity fields.
  // If quantity is missing, default to 1.
  const totalPrice = sales.reduce((sum, item) => {
    const price = item.price ?? 0;
    const quantity = item.quantity ?? 1;
    return sum + price * quantity;
  }, 0);

  return (
    <div
      className={`min-h-screen flex flex-col transition-all duration-300 ${
        theme === "dark" ? "bg-green-950 text-white" : "bg-white text-black"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`flex justify-between items-center px-8 py-4 shadow ${
          theme === "dark" ? "bg-green-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex items-center gap-2 text-green-600 font-bold text-2xl">
          <FaMapMarkerAlt />
          <Link to="/" className="hover:underline">
            LocalLink
          </Link>
        </div>

        <div className="flex items-center gap-6 text-gray-600">
          <Link to="/cart" aria-label="Cart" className="relative">
            <FaShoppingCart className="text-2xl hover:text-green-600 transition" />
            {sales.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full w-5 h-5 flex items-center justify-center text-white font-semibold">
                {sales.length}
              </span>
            )}
          </Link>
          <Link to="/user-profile" aria-label="User profile">
            <FaUserCircle className="text-2xl hover:text-green-600 transition" />
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow p-8 max-w-6xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-8">🛒 Shopping Cart</h1>

        {/* Loading state */}
        {loading && (
          <p className="text-lg text-gray-500">Loading your cart items...</p>
        )}

        {/* Error state */}
        {!loading && error && (
          <p className="text-lg text-red-600">{error}</p>
        )}

        {/* Empty cart */}
        {!loading && sales.length === 0 && !error && (
          <p className="text-lg text-gray-500">Your cart is currently empty.</p>
        )}

        {/* Cart items */}
        {!loading && sales.length > 0 && (
          <>
            <div className="flex flex-col space-y-6">
              {sales.map((sale) => (
                <div
                  key={sale._id || sale._id}
                  className={`rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center md:items-start gap-6 ${
                    theme === "dark"
                      ? "bg-green-900 text-white"
                      : "bg-green-100 text-black"
                  }`}
                >
                  {/* Image */}
                  <img
                    src={sale.image || "https://via.placeholder.com/100"}
                    alt={sale.title || "Product Image"}
                    className="w-28 h-28 object-cover rounded-lg flex-shrink-0"
                  />
                  {/* Details */}
                  <div className="flex flex-col flex-grow w-full">
                    <h2 className="text-xl font-semibold mb-2">
                      {sale.title || "Untitled Product"}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-1">
                      Quantity:{" "}
                      <span className="font-medium">{sale.quantity ?? 1}</span>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Price per unit:{" "}
                      <span className="font-medium">₹{sale.price ?? "N/A"}</span>
                    </p>
                    <p className="font-semibold text-green-700 dark:text-green-400 text-lg">
                      Total: ₹
                      {(sale.price ?? 0) * (sale.quantity ?? 1)}
                    </p>
                  </div>
                  {/* Remove button */}
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      className="bg-red-700 hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:ring-offset-1 focus:outline-none text-white px-5 py-2 rounded-lg transition"
                      aria-label={`Remove ${
                        sale.title || "this item"
                      } from cart`}
                      onClick={() =>
                        alert("Remove functionality not implemented yet.")
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart summary */}
            <div
              className={`mt-12 p-6 rounded-xl shadow-md text-right font-semibold text-xl ${
                theme === "dark"
                  ? "bg-green-900 text-white"
                  : "bg-green-100 text-black"
              }`}
            >
              Total Price: ₹{totalPrice}
            </div>

            {/* Checkout Button */}
            <div className="mt-6 text-right">
              <button
                type="button"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition shadow-lg"
                onClick={() =>
                  alert("Checkout functionality not implemented yet.")
                }
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer
        className={`bg-gray-100 text-gray-700 py-6 mt-auto shadow-inner ${
          theme === "dark" ? "bg-green-900 text-gray-300" : "bg-gray-100 text-gray-700"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm md:text-base">
            © 2025 LocalLink. Connecting Communities.
          </p>
          <nav className="flex space-x-4 mt-3 md:mt-0">
            <Link
              to="/about"
              className="hover:text-green-600 transition text-sm md:text-base"
            >
              About
            </Link>
            <Link
              to="/privacy"
              className="hover:text-green-600 transition text-sm md:text-base"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="hover:text-green-600 transition text-sm md:text-base"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
