// import {
//   FaMapMarkerAlt,
//   FaStar,
//   FaUsers,
//   FaBell,
//   FaShoppingCart,
//   FaUserCircle,
//   FaHeart,
//   FaShareAlt,
// } from "react-icons/fa";
// import { Link, useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const Navbar = () => (
//   <nav className="w-full bg-white shadow border-b">
//     {/* Desktop/Tablet Navbar */}
//     <div className="hidden md:flex justify-between items-center px-8 py-4">
//       <div className="text-green-600 text-2xl font-semibold flex items-center gap-2">
//         <FaMapMarkerAlt className="text-green-600" /> LocalLink
//       </div>
//       <div className="flex items-center space-x-4">
//         <FaBell className="text-xl text-gray-600 cursor-pointer" />
//         <Link to="/user-cart">
//           <FaShoppingCart className="text-xl text-gray-600 cursor-pointer" />
//         </Link>
//         <FaUserCircle className="text-xl text-gray-600 cursor-pointer" />
//         <Link to="/owner">
//           <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm hover:bg-green-600">
//             Become an Owner
//           </button>
//         </Link>
//       </div>
//     </div>

//     {/* Mobile Navbar */}
//     <div className="flex md:hidden justify-between items-center px-4 py-3">
//       <div className="text-green-600 text-xl font-bold flex items-center gap-2">
//         <FaMapMarkerAlt className="text-green-600" /> LocalLink
//       </div>
//       <div className="flex items-center gap-3">
//         <FaBell className="text-lg text-gray-600 cursor-pointer" />
//         <Link to="/user-cart">
//           <FaShoppingCart className="text-lg text-gray-600 cursor-pointer" />
//         </Link>
//         <FaUserCircle className="text-lg text-gray-600 cursor-pointer" />
//         <Link to="/owner">
//           <button className="bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600">
//             Owner
//           </button>
//         </Link>
//       </div>
//     </div>
//   </nav>
// );

// export default function ShopInfoPage() {
//   const [tab, setTab] = useState("onSale");
//   const [followed, setFollowed] = useState(false);
//   const [shop, setShop] = useState(null);
//   const [sales, setSales] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchShopInfo = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:8000/api/v1/shops/${id}/getshopinfo`
//         );
//         console.log("Shop Info:", res.data.data.shop);
//         setShop(res.data.data.shop);
//         setSales(res.data.data.sales);
//       } catch (error) {
//         console.error("Failed to fetch shop info:", error);
//       }
//     };

//     fetchShopInfo();
//   }, [id]);

//   if (!shop) {
//     return <div className="p-10 text-center">Loading shop details...</div>;
//   }

//   const filteredProducts =
//     tab === "onSale"
//       ? shop.products?.filter((p) => p.onSale) || []
//       : shop.products || [];

//   return (
//     <div className="bg-gray-50 min-h-screen text-black font-sans">
//       <Navbar />

//       <div
//         className="relative w-full h-[310px]"
//         style={{
//         backgroundImage: `url('${shop.coverImage?.trim() ? shop.coverImage : "https://via.placeholder.com/1200x300"}')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="absolute inset-0 bg-gray-600 bg-opacity-40 flex flex-col md:flex-row md:items-end md:justify-between gap-4 px-4 md:px-6 py-4">
//           <div className="flex items-center gap-4">
//             <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
//               <img
//                 src={shop.shopImage}
//                 alt="Shop"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div>
//               <h2 className="text-white text-2xl md:text-4xl font-semibold mb-1">
//                 {shop.shopName}
//               </h2>
//               <div className="flex flex-wrap items-center text-sm text-gray-200 gap-2 md:gap-4">
//                 <span className="flex items-center gap-1">
//                   <FaMapMarkerAlt /> {shop.address}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <FaStar className="text-yellow-400" /> {shop.rating || "N/A"}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <FaUsers /> {shop.followers?.length || 0} followers
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-2 flex-wrap">
//             <button className="bg-white text-black px-4 py-1 rounded text-sm border border-gray-300 flex items-center gap-2">
//               <FaShareAlt /> Share
//             </button>
//             <button
//               onClick={() => setFollowed(!followed)}
//               className={`px-4 py-1 rounded text-sm border border-gray-300 flex items-center gap-2 transition-colors duration-200 ${
//                 followed ? "bg-black text-white" : "bg-white text-black"
//               }`}
//             >
//               <FaHeart
//                 className={followed ? "text-red-500" : "text-gray-700"}
//               />
//               {followed ? "Following" : "Follow"}
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-4">
//         <div className="relative w-fit mx-auto bg-gray-200 rounded-full p-1 flex">
//           {["onSale", "about"].map((t) => (
//             <button
//               key={t}
//               onClick={() => setTab(t)}
//               className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 z-10 ${
//                 tab === t ? "bg-white text-black shadow" : "text-gray-700"
//               }`}
//             >
//               {t === "onSale" ? "On Sale" : "About"}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-5">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           <div className="md:col-span-3">
//             {tab !== "about" ? (
//               <>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   {filteredProducts.map((product, index) => (
//                     <div
//                       key={index}
//                       className="bg-white border-gray-600 min-h-[320px] rounded-lg p-4 shadow-sm relative"
//                     >
//                       <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
//                         {product.discount || "SALE"}
//                       </span>
//                       <div className="w-full h-32 bg-gray-200 mb-3 rounded flex items-center justify-center text-gray-400">
//                         🖼
//                       </div>
//                       <h3 className="font-semibold text-base text-gray-900 mb-1">
//                         {product.name}
//                       </h3>
//                       <p className="text-sm text-gray-100 mb-2">
//                         {product.description}
//                       </p>
//                       <p className="text-green-600 font-semibold">
//                         ₹{product.price}
//                         {product.oldPrice && (
//                           <span className="text-gray-400 line-through text-sm ml-2">
//                             ₹{product.oldPrice}
//                           </span>
//                         )}
//                       </p>
//                       <span className="text-xs px-2 py-1 rounded bg-gray-200 text-gray-700 inline-block mt-2">
//                         {product.category}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {sales.length > 0 && (
//                   <div className="mt-8">
//                     <h3 className="text-lg font-bold text-gray-800 mb-4">
//                       Current Sales
//                     </h3>
//                     <div className="grid md:grid-cols-2 gap-4">
//                       {sales.map((sale, index) => (
//                         <div
//                           key={index}
//                           className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm relative"
//                         >
//                           <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
//                             {sale.discount}% OFF
//                           </span>
//                           <div className="w-full h-32 bg-gray-100 mb-3 rounded flex items-center justify-center">
//                             <img
//                               src={sale.image}
//                               alt={sale.title}
//                               className="h-full object-cover"
//                             />
//                           </div>
//                           <h3 className="font-semibold text-base text-gray-900 mb-1">
//                             {sale.title}
//                           </h3>
//                           <p className="text-sm text-gray-700 mb-2">
//                             {sale.description}
//                           </p>
//                           <p className="text-xs text-gray-500">
//                             {new Date(sale.startDate).toLocaleDateString()} →{" "}
//                             {new Date(sale.endDate).toLocaleDateString()}
//                           </p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </>
//             ) : (
//               <div className="bg-white border rounded-lg p-6 shadow-sm">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-3">
//                   About the Shop
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-6">
//                   {shop.description || "No description available."}
//                 </p>
//               </div>
//             )}
//           </div>

//           <div className="space-y-6">
//             <div className="bg-white rounded-lg p-6 shadow-sm">
//               <h4 className="font-semibold text-base text-gray-800 mb-2">
//                 Opening Hours
//               </h4>
//               <ul className="text-sm space-y-1 text-gray-700">
//                 {shop.openingHours ? (
//                   Object.entries(shop.openingHours).map(([day, time]) => (
//                     <li key={day} className="flex justify-between">
//                       <span>{day}</span>
//                       <span>{time}</span>
//                     </li>
//                   ))
//                 ) : (
//                   <li className="text-gray-500">Not available</li>
//                 )}
//               </ul>
//             </div>

//             <div className="bg-white rounded-lg p-6 shadow-sm">
//               <h4 className="font-semibold text-base text-gray-800 mb-2">
//                 Shop Stats
//               </h4>
//               <ul className="text-sm space-y-1 text-gray-700">
//                 <li>Total Products: {shop.products?.length || 0}</li>
//                 <li>
//                   On Sale: {shop.products?.filter((p) => p.onSale).length || 0}
//                 </li>
//                 <li>Followers: {shop.followers?.length || 0}</li>
//                 <li>Rating: ⭐ {shop.rating || "N/A"}</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       <footer className="bg-white text-center text-sm text-gray-500 py-4 border-t w-full">
//         © 2025 LocalLink. All rights reserved.
//       </footer>
//     </div>
//   );
// }

import {
  FaMapMarkerAlt,
  FaStar,
  FaUsers,
  FaBell,
  FaShoppingCart,
  FaUserCircle,
  FaHeart,
  FaShareAlt,
  FaPhone,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Navbar = () => (
  <nav className="w-full bg-white shadow border-b">
    {/* Desktop View */}
    <div className="hidden md:flex justify-between items-center px-8 py-4">
      <div className="text-green-600 text-2xl font-semibold flex items-center gap-2">
        <FaMapMarkerAlt className="text-green-600" /> LocalLink
      </div>
      <div className="flex items-center space-x-4">
        <FaBell className="text-xl text-gray-600 cursor-pointer" />
        <Link to="/user-cart">
          <FaShoppingCart className="text-xl text-gray-600 cursor-pointer" />
        </Link>
        <FaUserCircle className="text-xl text-gray-600 cursor-pointer" />
        <Link to="/owner">
          <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm hover:bg-green-600">
            Become an Owner
          </button>
        </Link>
      </div>
    </div>

    {/* Mobile View */}
    <div className="flex md:hidden justify-between items-center px-4 py-3">
      <div className="text-green-600 text-xl font-bold flex items-center gap-2">
        <FaMapMarkerAlt className="text-green-600" /> LocalLink
      </div>
      <div className="flex items-center gap-3">
        <FaBell className="text-lg text-gray-600 cursor-pointer" />
        <Link to="/user-cart">
          <FaShoppingCart className="text-lg text-gray-600 cursor-pointer" />
        </Link>
        <FaUserCircle className="text-lg text-gray-600 cursor-pointer" />
        <Link to="/owner">
          <button className="bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600">
            Owner
          </button>
        </Link>
      </div>
    </div>
  </nav>
);

export default function ShopInfoPage() {
  const [tab, setTab] = useState("onSale");
  const [followed, setFollowed] = useState(false);
  const [shop, setShop] = useState(null);
  const [sales, setSales] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchShopInfo = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/v1/shops/${id}/getshopinfo`
        );
        setShop(res.data.data.shop);
        setSales(res.data.data.sales);
      } catch (error) {
        console.error("Failed to fetch shop info:", error);
      }
    };

    fetchShopInfo();
  }, [id]);

  if (!shop) {
    return <div className="p-10 text-center">Loading shop details...</div>;
  }

  const filteredProducts =
    tab === "onSale"
      ? shop.products?.filter((p) => p.onSale) || []
      : shop.products || [];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-black font-sans">
      <Navbar />

      {/* Cover Section */}
      <div
        className="relative w-full h-[310px] bg-cover bg-center"
        style={{
          backgroundImage: `url('${
            shop.coverImage?.replace("http://", "https://") ||
            "https://via.placeholder.com/1200x300"
          }')`,
        }}
      >
        <div className="absolute inset-0 bg-gray-600 bg-opacity-40 flex flex-col md:flex-row md:items-end md:justify-between gap-4 px-4 md:px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img
                src={shop.shopImage}
                alt="Shop"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-white text-2xl md:text-4xl font-semibold mb-1">
                {shop.shopName}
              </h2>
              <div className="flex flex-wrap items-center text-sm text-gray-200 gap-2 md:gap-4">
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt /> {shop.address}
                </span>
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" /> {shop.rating || "N/A"}
                </span>
                <span className="flex items-center gap-1">
                  <FaUsers /> {shop.followers?.length || 0} followers
                </span>
              </div>
            </div>
          </div>

          {/* Share / Follow */}
          <div className="flex gap-2 flex-wrap">
            <button className="bg-white text-black px-4 py-1 rounded text-sm border border-gray-300 flex items-center gap-2">
              <FaShareAlt /> Share
            </button>
            <button
              onClick={() => setFollowed(!followed)}
              className={`px-4 py-1 rounded text-sm border border-gray-300 flex items-center gap-2 transition-colors duration-200 ${
                followed ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              <FaHeart
                className={followed ? "text-red-500" : "text-gray-700"}
              />
              {followed ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="relative w-fit mx-auto bg-gray-200 rounded-full p-1 flex">
          {["onSale", "about"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 z-10 ${
                tab === t ? "bg-white text-black shadow" : "text-gray-700"
              }`}
            >
              {t === "onSale" ? "On Sale" : "About"}
            </button>
          ))}
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3">
            {tab !== "about" ? (
              <>
                {/* Products */}
                <div className="grid md:grid-cols-2 gap-4">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={index}
                      className="bg-white border-gray-600 min-h-[320px] rounded-lg p-4 shadow-sm relative"
                    >
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        {product.discount || "SALE"}
                      </span>
                      <div className="w-full h-32 bg-gray-200 mb-3 rounded flex items-center justify-center text-gray-400">
                        🖼
                      </div>
                      <h3 className="font-semibold text-base text-gray-900 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {product.description}
                      </p>
                      <p className="text-green-600 font-semibold">
                        ₹{product.price}
                        {product.oldPrice && (
                          <span className="text-gray-400 line-through text-sm ml-2">
                            ₹{product.oldPrice}
                          </span>
                        )}
                      </p>
                      <span className="text-xs px-2 py-1 rounded bg-gray-200 text-gray-700 inline-block mt-2">
                        {product.category}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Sales */}
                {sales.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      Current Sales
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {sales.map((sale, index) => (
                        <div
                          key={index}
                          className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm relative"
                        >
                          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            {sale.discount}% OFF
                          </span>
                          <div className="w-full h-32 bg-gray-100 mb-3 rounded flex items-center justify-center">
                            <img
                              src={sale.image}
                              alt={sale.title}
                              className="h-full object-cover"
                            />
                          </div>
                          <h3 className="font-semibold text-base text-gray-900 mb-1">
                            {sale.title}
                          </h3>
                          <p className="text-sm text-gray-700 mb-2">
                            {sale.description}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(sale.startDate).toLocaleDateString()} →{" "}
                            {new Date(sale.endDate).toLocaleDateString()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              // About Section - Larger, with phone/contact
              <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-10 shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  🏪 {shop.shopName}
                </h3>

                <div className="space-y-2 mb-5 text-base text-gray-700">
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-green-500" />
                    <span>{shop.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaUsers className="text-blue-500" />
                    <span>{shop.followers?.length || 0} followers</span>
                  </p>
                  {shop.contact && (
                    <p className="flex items-center gap-2">
                      <FaPhone className="text-yellow-600" />
                      <span>{shop.contactDetails}</span>
                    </p>
                  )}
                </div>

                <hr className="my-4 border-gray-200" />

                <p className="text-gray-600 text-sm leading-7 whitespace-pre-wrap">
                  {shop.description || "No description available."}
                </p>
              </div>
            )}
          </div>

          {/* Shop Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-base text-gray-800 mb-2">
                Opening Hours
              </h4>
              <ul className="text-sm space-y-1 text-gray-700">
                {shop.openingHours ? (
                  Object.entries(shop.openingHours).map(([day, time]) => (
                    <li key={day} className="flex justify-between">
                      <span>{day}</span>
                      <span>{time}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500">Not available</li>
                )}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-base text-gray-800 mb-2">
                Shop Stats
              </h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>Total Products: {shop.products?.length || 0}</li>
                <li>On Sale: {shop.products?.filter(p => p.onSale).length || 0}</li>
                <li>Followers: {shop.followers?.length || 0}</li>
                <li>Rating: ⭐ {shop.rating || "N/A"}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white text-center text-sm text-gray-500 py-4 border-t w-full mt-auto">
        © 2025 LocalLink. All rights reserved.
      </footer>
    </div>
  );
}
