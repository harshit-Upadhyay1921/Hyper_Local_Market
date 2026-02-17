// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import QrScanner from "../Components/QrScanner.jsx"; // 👈 Scanner component
//hi ih
// export default function Dashboard() {
//   const { id } = useParams();
//   const [shop, setShop] = useState(null);
//   const [sales, setSales] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showScanner, setShowScanner] = useState(false);
//   const [hasCameraPermission, setHasCameraPermission] = useState(null); // New state for permission
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchShopInfo() {
//       try {
//         const res = await axios.get(
//           `http://localhost:8000/api/v1/shops/${id}/getshopinfo`
//         );
//         setShop(res.data.data.shop);
//         setSales(res.data.data.sales);
//       } catch (err) {
//         console.error("Failed to fetch shop info", err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchShopInfo();
//   }, [id]);

//   if (loading) return <div className="p-8 text-lg">Loading...</div>;
//   if (!shop) return <div className="p-8 text-lg">Shop not found.</div>;

//   const owner = shop.owner || {};

//   // 👇 After QR is successfully scanned
//   const handleScanSuccess = (decodedText) => {
//     console.log("Scanned QR Code:", decodedText);
//     alert(`Scanned Coupon Code: ${decodedText}`);
//     setShowScanner(false); // Close scanner after success
//   };

//   // New function to request camera permission
//   const requestCameraPermission = async () => {
//     try {
//       await navigator.mediaDevices.getUserMedia({ video: true });
//       setHasCameraPermission(true);
//       setShowScanner(true);
//     } catch (error) {
//       setHasCameraPermission(false);
//       alert("Camera permission denied. Please allow camera access to scan QR.:",error);
//     }
//   };

//   return (
//     <div className="bg-white min-h-screen relative">
//       {/* Top-right Buttons */}
//       <div className="absolute top-4 right-4 flex space-x-2">
//         <button className="bg-black text-white px-3 py-1.5 rounded text-base">
//           Back
//         </button>
//         <button className="bg-red-700 text-white px-3 py-1.5 rounded text-base">
//           Logout
//         </button>
//       </div>

//       {/* Cover Image */}
//       <div
//         className="w-full h-56 bg-cover bg-center relative"
//         style={{
//           backgroundImage: `url('${
//             shop.coverImage || "https://via.placeholder.com/1200x300"
//           }')`,
//         }}
//       >
//         <div className="absolute bottom-[-40px] left-40 flex items-center">
//           <img
//             src={shop.shopImage || "https://via.placeholder.com/100"}
//             alt="Profile"
//             className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
//           />
//           <div className="ml-4">
//             <h1 className="text-3xl font-bold">{shop.shopName}</h1>
//             <p className="text-base text-gray-600">{owner.email}</p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="pt-24 px-6 max-w-6xl mx-auto">
//         <div className="flex items-center justify-between bg-gray-100 p-6 rounded-lg shadow">
//           <div className="space-y-1 text-black text-lg">
//             <h2 className="text-2xl font-semibold">{owner.name}</h2>
//             <p>
//               Followers:{" "}
//               {Array.isArray(shop.followers) ? shop.followers.length : 0}
//             </p>
//             <p>Contact: {shop.contactDetails || "N/A"}</p>
//             <p>Address: {shop.address || "N/A"}</p>
//             <p>Category: {shop.category || "N/A"}</p>
//           </div>

//           <div className="flex flex-col gap-2 items-end">
//             <button className="bg-green-700 text-white px-5 py-2 rounded text-lg">
//               Update Info
//             </button>
//             <button
//               className="bg-black text-white px-5 py-2 rounded text-lg"
//               onClick={requestCameraPermission} // Updated to request permission first
//             >
//               Verify Coupon
//             </button>
//           </div>
//         </div>

//         {/* Scanner Area */}
//         {showScanner && hasCameraPermission && ( // Conditionally render only if permission is granted
//           <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
//             <h3 className="text-xl font-semibold mb-2">Scan Coupon QR</h3>
//             <QrScanner
//               onScanSuccess={handleScanSuccess}
//               onClose={() => {
//                 setShowScanner(false);
//                 setHasCameraPermission(null); // Reset permission state
//               }}
//             />
//           </div>
//         )}

//         {/* Sales Section */}
//         <div className="mt-6">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-xl font-semibold">Sales</h3>
//             <button
//               className="bg-green-700 text-white px-5 py-2 rounded text-lg"
//               onClick={() => navigate("/createsale")}
//             >
//               + Create Sale
//             </button>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {sales.map((sale) => (
//               <div
//                 key={sale._id}
//                 className="bg-white border rounded-lg p-4 shadow-sm"
//               >
//                 <img
//                   src={
//                     sale.image ||
//                     "https://via.placeholder.com/200x120?text=No+Image"
//                   }
//                   alt={sale.title}
//                   className="rounded w-full h-44 object-cover"
//                 />
//                 <h4 className="font-semibold mt-3 text-lg">{sale.title}</h4>
//                 <p className="text-sm text-gray-500">
//                   {new Date(sale.startDate).toDateString()} • {sale.discount}%
//                   off
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import QrScanner from "../Components/QrScanner.jsx"; // 👈 Scanner component

// export default function Dashboard() {
//   const { id } = useParams();
//   const [shop, setShop] = useState(null);
//   const [sales, setSales] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showScanner, setShowScanner] = useState(false);
//   const [hasCameraPermission, setHasCameraPermission] = useState(null); // Tracks permission
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchShopInfo() {
//       try {
//         const res = await axios.get(
//           `http://localhost:8000/api/v1/shops/${id}/getshopinfo`
//         );
//         setShop(res.data.data.shop);
//         setSales(res.data.data.sales);
//       } catch (err) {
//         console.error("Failed to fetch shop info", err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchShopInfo();
//   }, [id]);

//   if (loading) return <div className="p-8 text-lg">Loading...</div>;
//   if (!shop) return <div className="p-8 text-lg">Shop not found.</div>;

//   const owner = shop.owner || {};

//   // 👇 After QR is successfully scanned
//   const handleScanSuccess = (decodedText) => {
//     console.log("Scanned QR Code:", decodedText);
//     alert(`Scanned Coupon Code: ${decodedText}`);
//     setShowScanner(false); // Close scanner after success
//     setHasCameraPermission(null); // Reset permission to allow fresh start
//   };

//   // Function to request camera permission
//   const requestCameraPermission = async () => {
//     if (showScanner) return; // Prevent multiple clicks/openings (guards against duplicates)
//     try {
//       await navigator.mediaDevices.getUserMedia({ video: true });
//       setHasCameraPermission(true);
//       setShowScanner(true);
//     } catch (err) {
//       setHasCameraPermission(false);
//       alert("Camera permission denied. Please allow camera access to scan QR.:",err);
//     }
//   };

//   return (
//     <div className="bg-white min-h-screen relative">
//       {/* Top-right Buttons */}
//       <div className="absolute top-4 right-4 flex space-x-2">
//         <button className="bg-black text-white px-3 py-1.5 rounded text-base">
//           Back
//         </button>
//         <button className="bg-red-700 text-white px-3 py-1.5 rounded text-base">
//           Logout
//         </button>
//       </div>

//       {/* Cover Image */}
//       <div
//         className="w-full h-56 bg-cover bg-center relative"
//         style={{
//           backgroundImage: `url('${
//             shop.coverImage || "https://via.placeholder.com/1200x300"
//           }')`,
//         }}
//       >
//         <div className="absolute bottom-[-40px] left-40 flex items-center">
//           <img
//             src={shop.shopImage || "https://via.placeholder.com/100"}
//             alt="Profile"
//             className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
//           />
//           <div className="ml-4">
//             <h1 className="text-3xl font-bold">{shop.shopName}</h1>
//             <p className="text-base text-gray-600">{owner.email}</p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="pt-24 px-6 max-w-6xl mx-auto">
//         <div className="flex items-center justify-between bg-gray-100 p-6 rounded-lg shadow">
//           <div className="space-y-1 text-black text-lg">
//             <h2 className="text-2xl font-semibold">{owner.name}</h2>
//             <p>
//               Followers:{" "}
//               {Array.isArray(shop.followers) ? shop.followers.length : 0}
//             </p>
//             <p>Contact: {shop.contactDetails || "N/A"}</p>
//             <p>Address: {shop.address || "N/A"}</p>
//             <p>Category: {shop.category || "N/A"}</p>
//           </div>

//           <div className="flex flex-col gap-2 items-end">
//             <button className="bg-green-700 text-white px-5 py-2 rounded text-lg">
//               Update Info
//             </button>
//             <button
//               className="bg-black text-white px-5 py-2 rounded text-lg"
//               onClick={requestCameraPermission}
//             >
//               Verify Coupon
//             </button>
//           </div>
//         </div>

//         {/* Scanner Area */}
//         {showScanner && hasCameraPermission && (
//           <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
//             <h3 className="text-xl font-semibold mb-2">Scan Coupon QR</h3>
//             <QrScanner
//               key={Date.now()} // Forces fresh remount each time (prevents duplicates)
//               onScanSuccess={handleScanSuccess}
//               onClose={() => {
//                 setShowScanner(false);
//                 setHasCameraPermission(null); // Full reset
//               }}
//             />
//           </div>
//         )}

//         {/* Sales Section */}
//         <div className="mt-6">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-xl font-semibold">Sales</h3>
//             <button
//               className="bg-green-700 text-white px-5 py-2 rounded text-lg"
//               onClick={() => navigate("/createsale")}
//             >
//               + Create Sale
//             </button>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {sales.map((sale) => (
//               <div
//                 key={sale._id}
//                 className="bg-white border rounded-lg p-4 shadow-sm"
//               >
//                 <img
//                   src={
//                     sale.image ||
//                     "https://via.placeholder.com/200x120?text=No+Image"
//                   }
//                   alt={sale.title}
//                   className="rounded w-full h-44 object-cover"
//                 />
//                 <h4 className="font-semibold mt-3 text-lg">{sale.title}</h4>
//                 <p className="text-sm text-gray-500">
//                   {new Date(sale.startDate).toDateString()} • {sale.discount}%
//                   off
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import QrScanner from "../Components/QrScanner.jsx"; // 👈 Ensure this is implemented

// export default function Dashboard() {
//   const { id } = useParams();
//   const [shop, setShop] = useState(null);
//   const [sales, setSales] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showScanner, setShowScanner] = useState(false);
//   const [hasCameraPermission, setHasCameraPermission] = useState(null); // Tracks permission
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchShopInfo() {
//       try {
//         const res = await axios.get(
//           `http://localhost:8000/api/v1/shops/${id}/getshopinfo`
//         );
//         setShop(res.data.data.shop);
//         setSales(res.data.data.sales);
//       } catch (err) {
//         console.error("Failed to fetch shop info", err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchShopInfo();
//   }, [id]);

//   if (loading) return <div className="p-8 text-lg">Loading...</div>;
//   if (!shop) return <div className="p-8 text-lg">Shop not found.</div>;

//   const owner = shop.owner || {};

//   // ✅ Handle successful scan & redeem
//   const handleScanSuccess = async (decodedText) => {
//     try {
//       const parsed = JSON.parse(decodedText); // expect { code, user }
//       const { code, user } = parsed;

//       if (!code || !user) {
//         alert("Invalid QR code format.");
//         setShowScanner(false);
//         return;
//       }

//       const res = await axios.post(
//         "http://localhost:8000/api/v1/coupon/redeem",
//         { code, userId: user, shopId: shop._id },
//         { withCredentials: true }
//       );

//       alert("✅ Coupon redeemed successfully!");
//       console.log("Redeem response:", res.data);
//     } catch (err) {
//       console.error("Redeem failed", err.response?.data || err.message);
//       const msg = err.response?.data?.message || "Redeem failed.";
//       alert("❌ " + msg);
//     } finally {
//       setShowScanner(false);
//       setHasCameraPermission(null);
//     }
//   };

//   // 🛑 Ask for camera permission before scanning
//   const requestCameraPermission = async () => {
//     if (showScanner) return;
//     try {
//       await navigator.mediaDevices.getUserMedia({ video: true });
//       setHasCameraPermission(true);
//       setShowScanner(true);
//     } catch (err) {
//       setHasCameraPermission(false);
//       alert("Camera permission denied. Please allow camera access to scan QR.:", err);
//     }
//   };

//   return (
//     <div className="bg-white min-h-screen relative">
//       {/* Top-right Buttons */}
//       <div className="absolute top-4 right-4 flex space-x-2">
//         <button className="bg-black text-white px-3 py-1.5 rounded text-base">
//           Back
//         </button>
//         <button className="bg-red-700 text-white px-3 py-1.5 rounded text-base">
//           Logout
//         </button>
//       </div>

//       {/* Cover Image */}
//       <div
//         className="w-full h-56 bg-cover bg-center relative"
//         style={{
//           backgroundImage: `url('${
//             shop.coverImage || "https://via.placeholder.com/1200x300"
//           }')`,
//         }}
//       >
//         <div className="absolute bottom-[-40px] left-40 flex items-center">
//           <img
//             src={shop.shopImage || "https://via.placeholder.com/100"}
//             alt="Profile"
//             className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
//           />
//           <div className="ml-4">
//             <h1 className="text-3xl font-bold">{shop.shopName}</h1>
//             <p className="text-base text-gray-600">{owner.email}</p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="pt-24 px-6 max-w-6xl mx-auto">
//         {/* Shop Info Section */}
//         <div className="flex items-center justify-between bg-gray-100 p-6 rounded-lg shadow">
//           <div className="space-y-1 text-black text-lg">
//             <h2 className="text-2xl font-semibold">{owner.name}</h2>
//             <p>
//               Followers:{" "}
//               {Array.isArray(shop.followers) ? shop.followers.length : 0}
//             </p>
//             <p>Contact: {shop.contactDetails || "N/A"}</p>
//             <p>Address: {shop.address || "N/A"}</p>
//             <p>Category: {shop.category || "N/A"}</p>
//           </div>

//           <div className="flex flex-col gap-2 items-end">
//             <button className="bg-green-700 text-white px-5 py-2 rounded text-lg">
//               Update Info
//             </button>
//             <button
//               className="bg-black text-white px-5 py-2 rounded text-lg"
//               onClick={requestCameraPermission}
//             >
//               Verify Coupon
//             </button>
//           </div>
//         </div>

//         {/* QR Scanner Area */}
//         {showScanner && hasCameraPermission && (
//           <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
//             <h3 className="text-xl font-semibold mb-2">Scan Coupon QR</h3>
//             <QrScanner
//               key={Date.now()}
//               onScanSuccess={handleScanSuccess}
//               onClose={() => {
//                 setShowScanner(false);
//                 setHasCameraPermission(null);
//               }}
//             />
//           </div>
//         )}

//         {/* Sales Section */}
//         <div className="mt-6">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-xl font-semibold">Sales</h3>
//             <button
//               className="bg-green-700 text-white px-5 py-2 rounded text-lg"
//               onClick={() => navigate("/createsale")}
//             >
//               + Create Sale
//             </button>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {sales.map((sale) => (
//               <div
//                 key={sale._id}
//                 className="bg-white border rounded-lg p-4 shadow-sm"
//               >
//                 <img
//                   src={
//                     sale.image ||
//                     "https://via.placeholder.com/200x120?text=No+Image"
//                   }
//                   alt={sale.title}
//                   className="rounded w-full h-44 object-cover"
//                 />
//                 <h4 className="font-semibold mt-3 text-lg">{sale.title}</h4>
//                 <p className="text-sm text-gray-500">
//                   {new Date(sale.startDate).toDateString()} • {sale.discount}%
//                   off
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import QrScanner from "../Components/QrScanner.jsx";

export default function Dashboard() {
  const { id } = useParams();
  const [shop, setShop] = useState(null);
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showScanner, setShowScanner] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchShopInfo() {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/v1/shops/${id}/getshopinfo`
        );
        setShop(res.data.data.shop);
        setSales(res.data.data.sales);
      } catch (err) {
        console.error("Failed to fetch shop info", err);
      } finally {
        setLoading(false);
      }
    }

    fetchShopInfo();
  }, [id]);

  if (loading) return <div className="p-8 text-lg">Loading...</div>;
  if (!shop) return <div className="p-8 text-lg">Shop not found.</div>;

  const owner = shop.owner || {};

  const handleScanSuccess = async (decodedText) => {
    try {
      const parsed = JSON.parse(decodedText);
      const { code, user } = parsed;

      if (!code || !user) {
        alert("Invalid QR code format.");
        setShowScanner(false);
        return;
      }

      const res = await axios.post(
        "http://localhost:8000/api/v1/coupon/redeem",
        { code, userId: user, shopId: shop._id },
        { withCredentials: true }
      );

      alert("✅ Coupon redeemed successfully!");
      console.log("Redeem response:", res.data);
    } catch (err) {
      console.error("Redeem failed", err.response?.data || err.message);
      const msg = err.response?.data?.message || "Redeem failed.";
      alert("❌ " + msg);
    } finally {
      setShowScanner(false);
      setHasCameraPermission(null);
    }
  };

  const requestCameraPermission = async () => {
    if (showScanner) return;
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      setHasCameraPermission(true);
      setShowScanner(true);
    } catch (err) {
      setHasCameraPermission(false);
      alert("Camera permission denied. Please allow camera access to scan QR.:", err);
    }
  };

  return (
    <div className="bg-white min-h-screen text-black font-sans">
      {/* Header */}
      <header className="bg-gray-100 shadow px-6 py-3 flex items-center justify-between z-10">
        <h1 className="text-xl font-bold text-green-600">LocalLink</h1>
        <button
          onClick={() => navigate(-1)}
          className="text-black flex items-center gap-2 hover:text-gray-600"
        >
          Back
        </button>
      </header>

      {/* Cover Image */}
      <div
        className="w-full h-56 bg-cover bg-center relative mt-2"
        style={{
          backgroundImage: `url('${shop.coverImage || "https://via.placeholder.com/1200x300"}')`,
        }}
      >
        <div className="absolute bottom-[-60px] left-40 flex items-center">
          <img
            src={shop.shopImage || "https://via.placeholder.com/100"}
            alt="Profile"
            className="w-44 h-44 rounded-full border-4 border-white shadow-lg"
          />
          <div className="ml-6">
            <h1 className="text-4xl font-bold text-white drop-shadow-md">{shop.shopName}</h1>
            <p className="text-lg text-white/80 drop-shadow-sm">{owner.email}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-36 px-6 max-w-6xl mx-auto">
        {/* Shop Info Section */}
        <div className="flex items-center justify-between bg-gray-100 p-6 rounded-lg shadow">
          <div className="space-y-2 text-black text-lg">
            <h2 className="text-2xl font-semibold">{owner.name}</h2>
            <p>Followers: {Array.isArray(shop.followers) ? shop.followers.length : 0}</p>
            <p>Contact: {shop.contactDetails || "N/A"}</p>
            <p>Address: {shop.address || "N/A"}</p>
            <p>Category: {shop.category || "N/A"}</p>
          </div>

          <div className="flex flex-col gap-3 items-end">
            <button className="bg-green-700 text-white px-5 py-2 rounded text-lg w-40">
              Update Info
            </button>
            <button
              className="bg-green-700 text-white px-5 py-2 rounded text-lg w-40"
              onClick={requestCameraPermission}
            >
              Verify Coupon
            </button>
            <button
              className="bg-green-700 text-white px-5 py-2 rounded text-lg w-40"
              onClick={() => navigate("/createsale")}
            >
              + Create Sale
            </button>
          </div>
        </div>

        {/* QR Scanner Area */}
        {showScanner && hasCameraPermission && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Scan Coupon QR</h3>
            <QrScanner
              key={Date.now()}
              onScanSuccess={handleScanSuccess}
              onClose={() => {
                setShowScanner(false);
                setHasCameraPermission(null);
              }}
            />
          </div>
        )}

        {/* Sales Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Sales</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sales.map((sale) => (
              <div
                key={sale._id}
                className="bg-white text-black border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <img
                  src={sale.image || "https://via.placeholder.com/200x120?text=No+Image"}
                  alt={sale.title}
                  className="rounded w-full h-44 object-cover"
                />
                <h4 className="font-semibold mt-3 text-lg">{sale.title}</h4>
                <p className="text-sm text-gray-500">
                  {new Date(sale.startDate).toDateString()} • {sale.discount}% off
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 text-black py-4 mt-10 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} LocalLink. All rights reserved.</p>
      </footer>
    </div>
  );
}
