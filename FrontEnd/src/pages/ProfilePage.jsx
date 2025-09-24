// import React, { useState } from "react";
// import { FaMapMarkerAlt, FaBell, FaShoppingCart, FaUserCircle } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Navbar = () => (
//   <nav className="flex justify-between items-center px-8 py-4 bg-white shadow fixed top-0 left-0 right-0 z-50 border-b-2">
//     <div className="text-green-600 text-2xl font-bold flex items-center gap-2">
//       <FaMapMarkerAlt className="text-green-600" /> LocalLink
//     </div>
//     <div className="flex items-center gap-4 border-2 border-green-600 rounded-full px-4 py-1">
//       <select className="bg-white text-sm px-2 py-1 rounded outline-none">
//         <option>All Categories</option>
//         <option>Groceries</option>
//         <option>Clothing</option>
//         <option>Furniture</option>
//         <option>Electronics</option>
//       </select>
//       <input
//         type="text"
//         placeholder="Search shops or categories..."
//         className="outline-none px-2 py-1 text-sm w-64"
//       />
//     </div>
//     <div className="flex items-center space-x-4 px-4 py-1">
//       <FaBell className="text-black" />
//       <FaShoppingCart className="text-black" />
//       <FaUserCircle className="text-black" />
//       <button className="px-3 py-1 bg-green-600 text-white rounded">Become an Owner</button>
//     </div>
//   </nav>
// );

// export default function ProfilePage() {
//   const [showLocationPopup, setShowLocationPopup] = useState(false);

//   const user = {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     following: 80,
//   };

//   const handleLocationUpdate = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         alert(`Location Updated!\nLat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`);
//         setShowLocationPopup(false);
//       }, () => alert("Permission denied or error in location detection."));
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-black">
//       <Navbar />

//       <div className="pt-24 px-4 flex justify-center">
//         <div className="bg-white rounded-lg shadow p-6 w-full max-w-3xl">
//           <div className="flex justify-between items-start">
//             <h2 className="text-2xl font-bold">
//               {user.name}
//             </h2>
//             <div className="flex gap-2">
//               <button className="px-3 py-1 bg-green-600 text-white rounded text-sm">Update Info</button>
//               <button
//                 onClick={() => setShowLocationPopup(true)}
//                 className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
//               >
//                 Update Location
//               </button>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6 mt-4">
//             <div>
//               <p className="font-semibold">Email: {user.email}</p>
//               <p className="font-semibold">Following: {user.following}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-8 px-4 max-w-3xl mx-auto">
//         <h2 className="text-2xl font-semibold mb-4">Followed Shops</h2>
//         <div className="grid md:grid-cols-2 gap-4">
//           <div className="bg-white p-4 rounded shadow">
//             <h3 className="font-bold">Tech Store</h3>
//             <p className="text-sm">123 Main Street</p>
//           </div>
//           <div className="bg-white p-4 rounded shadow">
//             <h3 className="font-bold">Book Haven</h3>
//             <p className="text-sm">456 Library Lane</p>
//           </div>
//           <div className="bg-white p-4 rounded shadow">
//             <h3 className="font-bold">Coffee Corner</h3>
//             <p className="text-sm">789 Brew Road</p>
//           </div>
//         </div>
//       </div>

//       {showLocationPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <p className="mb-4">Allow location access to update your location</p>
//             <button
//               onClick={handleLocationUpdate}
//               className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mr-2"
//             >
//               Allow
//             </button>
//             <button
//               onClick={() => setShowLocationPopup(false)}
//               className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react"; 
import axios from "axios";
import { FaMapMarkerAlt, FaBell, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => (
  <nav className="w-full bg-white shadow">
    {/* Common Logo and Icons */}
    <div className="flex items-center justify-between px-4 py-2 md:hidden">
      {/* Logo */}
      <div className="flex items-center gap-2 text-green-600 font-bold text-lg">
        <FaMapMarkerAlt />
        LocalLink
      </div>
      {/* Icons */}
      <div className="flex items-center gap-2">
        <FaBell className="text-lg text-gray-600 cursor-pointer" />
        <Link to="/user-cart" aria-label="Cart">
          <FaShoppingCart className="text-lg text-gray-600 cursor-pointer" />
        </Link>
        <Link to="/user-profile" aria-label="Profile">
          <FaUserCircle className="text-lg text-gray-600 cursor-pointer" />
        </Link>
        <Link to="/user-switch">
          <button className="bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 whitespace-nowrap">
            Become an Owner
          </button>
        </Link>
      </div>
    </div>

    {/* Desktop/Tablet Navbar */}
    <div className="hidden md:flex justify-between items-center px-8 py-4">
      {/* Logo */}
      <div className="flex items-center gap-2 text-green-600 font-bold text-2xl">
        <FaMapMarkerAlt />
        LocalLink
      </div>

      {/* Icons + CTA */}
      <div className="flex items-center space-x-4">
        <FaBell className="text-2xl text-gray-600 cursor-pointer" />
        <Link to="/user-cart" aria-label="Cart">
          <FaShoppingCart className="text-2xl text-gray-600 cursor-pointer" />
        </Link>
        <Link to="/user-profile" aria-label="Profile">
          <FaUserCircle className="text-2xl text-gray-600 cursor-pointer" />
        </Link>
        <Link to="/user-switch">
          <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
            Become an Owner
          </button>
        </Link>
      </div>
    </div>
  </nav>
);

export default function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const navigate = useNavigate();

  const handleLocationUpdate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        alert(`Location Updated!\nLat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`);
        setShowLocationPopup(false);
      }, () => alert("Permission denied or error in location detection."));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/auth/profile", {
          withCredentials: true,
        });
        console.log(res.data)
        setUserData(res.data.data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserProfile();
  }, []);

  if (!userData) {
    return <div className="pt-24 text-center text-lg">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <Navbar />

      <div className="pt-24 px-4 flex justify-center">
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 md:p-8 w-full max-w-5xl">
          {/* Back Button */}
          <button
            onClick={() => navigate("/home")}
            className="mb-4 text-green-600 hover:text-green-800 flex items-center gap-1 text-sm sm:text-base"
          >
            ← Back
          </button>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold">
              {userData.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 sm:px-4 py-2 bg-green-600 text-white rounded text-sm sm:text-base">Update Info</button>
              <button
                onClick={() => setShowLocationPopup(true)}
                className="px-3 sm:px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm sm:text-base"
              >
                Update Location
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <p className="font-semibold text-base sm:text-lg">Email: {userData.email}</p>
              <p className="font-semibold text-base sm:text-lg">Following: {userData.followingShops?.length || 0}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Followed Shops</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {userData.followingShops && userData.followingShops.length > 0 ? (
            userData.followingShops.map((shop) => (
              <div key={shop._id} className="bg-white p-4 sm:p-6 rounded shadow">
                <h3 className="font-bold text-base sm:text-lg">{shop.shopName}</h3>
                <p className="text-sm sm:text-base">{shop.address}</p>
              </div>
            ))
          ) : (
            <p className="text-base sm:text-lg">No shops followed yet.</p>
          )}
        </div>
      </div>

      {showLocationPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-sm">
            <p className="mb-4 text-base sm:text-lg">Allow location access to update your location</p>
            <button
              onClick={handleLocationUpdate}
              className="px-4 sm:px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 mr-2"
            >
              Allow
            </button>
            <button
              onClick={() => setShowLocationPopup(false)}
              className="px-4 sm:px-5 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
