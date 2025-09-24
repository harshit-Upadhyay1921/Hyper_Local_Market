// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaPlus, FaArrowLeft } from "react-icons/fa";
// import axios from "axios";

// export default function SwitchShopAccountPage() {
//   const [shops, setShops] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchShops = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8000/api/v1/shops/getallshops",
//           {
//             withCredentials: true,
//           }
//         );
//         setShops(response.data.data);
//       } catch (error) {
//         console.error("Failed to fetch shops: ", error);
//       }
//     };

//     fetchShops();
//   }, []);

//   const isEmpty = shops.length === 0;

//   return (
//     <div className="min-h-screen bg-gray-200 px-4 py-10 text-white font-inter">
//       {/* Dynamic max-width and padding */}
//       <div
//         className={`mx-auto bg-gray-400 rounded-3xl shadow-2xl transition-all duration-300 ${
//           isEmpty ? "max-w-md p-6" : "max-w-6xl p-10"
//         }`}
//       >
//         {/* Top Bar */}
//         <div className="flex items-center justify-between mb-10">
//           <button
//             onClick={() => navigate("/home")}
//             className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
//           >
//             <FaArrowLeft />
//             Back
//           </button>

//           <h2 className="text-3xl font-bold text-center flex-1 -ml-6">
//             Create Sale
//           </h2>

//           <div className="w-12" />
//         </div>

//         {/* Grid */}
//         <div
//           className={`grid gap-8 ${
//             isEmpty
//               ? "grid-cols-1 place-items-center" // center the only item
//               : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
//           }`}
//         >
//           {shops.map((shop) => (
//             <Link
//               to={`/shopprofile/${shop._id}`}
//               key={shop._id}
//               className="bg-white/10 hover:bg-white/20 transition rounded-2xl shadow-lg p-6 border border-white/10 hover:scale-[1.03] flex flex-col items-center"
//             >
//               <img
//                 src={shop.shopImage}
//                 alt={shop.shopName}
//                 className="w-28 h-28 object-cover rounded-full border-4 border-white mb-4"
//               />
//               <h3 className="text-2xl font-semibold mb-1 text-white">
//                 {shop.shopName}
//               </h3>
//               <p className="text-sm text-gray-600 mb-1">{shop.category}</p>
//               <p className="text-xs text-black text-center">{shop.address}</p>
//             </Link>
//           ))}

//           {/* Create New Shop Card */}
//           <Link
//             to="/owner"
//             className="bg-white/10 hover:bg-white/20 transition rounded-2xl shadow-lg p-6 border-2 border-dashed border-white/20 hover:scale-[1.03] flex flex-col items-center justify-center text-center"
//           >
//             <div className="w-28 h-28 rounded-full border-4 border-white flex items-center justify-center mb-4">
//               <FaPlus className="text-white text-3xl" />
//             </div>
//             <p className="text-white text-lg font-semibold">Create New Shop</p>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus, FaArrowLeft } from "react-icons/fa";
import axios from "axios";

export default function SwitchShopAccountPage() {
  const [shops, setShops] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/shops/getallshops",
          {
            withCredentials: true,
          }
        );
        setShops(response.data.data);
      } catch (error) {
        console.error("Failed to fetch shops: ", error);
      }
    };

    fetchShops();
  }, []);

  const isEmpty = shops.length === 0;

  return (
    <div className="min-h-screen bg-gray-200 font-inter flex flex-col">
      {/* Header */}
      <header className="bg-white shadow px-6 py-4 flex items-center">
        <h1 className="text-2xl font-bold text-green-600">LocalLink</h1>
      </header>

      {/* Page content */}
      <main className="flex-grow px-4 py-10 text-white">
        <div
          className={`mx-auto bg-[#1c1c1c] rounded-3xl shadow-2xl transition-all duration-300 ${
            isEmpty ? "max-w-md p-6" : "max-w-6xl p-10"
          }`}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-10">
            <button
              onClick={() => navigate("/home")}
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
            >
              <FaArrowLeft />
              Back
            </button>

            <h2 className="text-3xl font-bold text-center flex-1 -ml-6">
              Create Sale
            </h2>

            <div className="w-12" />
          </div>

          {/* Grid */}
          <div
            className={`grid gap-8 ${
              isEmpty
                ? "grid-cols-1 place-items-center"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {shops.map((shop) => (
              <Link
                to={`/shopprofile/${shop._id}`}
                key={shop._id}
                className="bg-[#2a2a2a] hover:bg-[#3a3a3a] transition rounded-2xl shadow-lg p-6 border border-white/10 hover:scale-[1.03] flex flex-col items-center"
              >
                <img
                  src={shop.shopImage}
                  alt={shop.shopName}
                  className="w-28 h-28 object-cover rounded-full border-4 border-white mb-4"
                />
                <h3 className="text-2xl font-semibold mb-1 text-white">
                  {shop.shopName}
                </h3>
                <p className="text-sm text-gray-400 mb-1">{shop.category}</p>
                <p className="text-xs text-gray-300 text-center">{shop.address}</p>
              </Link>
            ))}

            {/* Create New Shop Card */}
            <Link
              to="/owner"
              className="bg-[#2a2a2a] hover:bg-[#3a3a3a] transition rounded-2xl shadow-lg p-6 border-2 border-dashed border-white/20 hover:scale-[1.03] flex flex-col items-center justify-center text-center"
            >
              <div className="w-28 h-28 rounded-full border-4 border-white flex items-center justify-center mb-4">
                <FaPlus className="text-white text-3xl" />
              </div>
              <p className="text-white text-lg font-semibold">
                Create New Shop
              </p>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-center py-4 text-sm text-gray-500">
        © 2025 LocalLink. All rights reserved.
      </footer>
    </div>
  );
}
