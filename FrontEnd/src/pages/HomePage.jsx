// export default HomePage;

// import { useEffect, useState, useRef } from "react";
// import {
//   FaBell,
//   FaUserCircle,
//   FaShoppingCart,
//   FaMapMarkerAlt,
//   FaStar,
//   FaHeart,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import coverImage from "../assets/home.bg.png";
// import axios from "axios";

// // ✅ NAVBAR Component
// const Navbar = ({ onSearchChange, onCategoryChange }) => (
//   <nav className="w-full bg-white shadow">
//     {/* Common Logo and Icons */}
//     <div className="flex items-center justify-between px-4 py-2 md:hidden">
//       {/* Logo */}
//       <div className="flex items-center gap-2 text-green-600 font-bold text-lg">
//         <FaMapMarkerAlt />
//         LocalLink
//       </div>
//       {/* Icons */}
//       <div className="flex items-center gap-2">
//         <FaBell className="text-lg text-gray-600 cursor-pointer" />
//         <Link to="/user-cart" aria-label="Cart">
//           <FaShoppingCart className="text-lg text-gray-600 cursor-pointer" />
//         </Link>
//         <Link to="/user-profile" aria-label="Profile">
//           <FaUserCircle className="text-lg text-gray-600 cursor-pointer" />
//         </Link>
//         <Link to="/user-switch">
//           <button className="bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 whitespace-nowrap">
//             Become an Owner
//           </button>
//         </Link>
//       </div>
//     </div>

//     {/* Mobile Category + Search */}
//     <div className="flex md:hidden items-center gap-2 px-4 pb-2">
//       <select
//         onChange={(e) => onCategoryChange(e.target.value)}
//         className="min-w-[65px] max-w-[90px] px-1 py-1 border-2 border-green-400 rounded-full bg-white text-[11px] text-gray-700"
//       >
//         <option value="">All</option>
//         <option value="electronics">Electronics</option>
//         <option value="clothing">Clothing</option>
//         <option value="groceries">Groceries</option>
//         <option value="others">Others</option>
//       </select>
//       <div className="relative flex-1">
//         <input
//           type="text"
//           placeholder="Search shops..."
//           onChange={(e) => onSearchChange(e.target.value)}
//           className="w-full p-2 pl-8 border-2 text-black border-green-400 rounded-full focus:outline-none text-xs"
//         />
//         <span className="absolute left-2 top-2 text-green-500 text-sm">🔍</span>
//       </div>
//     </div>

//     {/* Desktop/Tablet Navbar */}
//     <div className="hidden md:flex justify-between items-center px-8 py-4">
//       {/* Logo */}
//       <div className="flex items-center gap-2 text-green-600 font-bold text-2xl">
//         <FaMapMarkerAlt />
//         LocalLink
//       </div>

//       {/* Category + Search */}
//       <div className="flex items-center space-x-4 w-1/2">
//         <select
//           onChange={(e) => onCategoryChange(e.target.value)}
//           className="p-2 border-2 border-green-400 rounded-full bg-white text-gray-700"
//         >
//           <option value="">All Categories</option>
//           <option value="electronics">Electronics</option>
//           <option value="clothing">Clothing</option>
//           <option value="groceries">Groceries</option>
//           <option value="others">Others</option>
//         </select>
//         <div className="relative w-full">
//           <input
//             type="text"
//             placeholder="Search shops or categories..."
//             onChange={(e) => onSearchChange(e.target.value)}
//             className="w-full p-2 pl-10 border-2 text-black border-green-400 rounded-full focus:outline-none"
//           />
//           <span className="absolute left-3 top-2.5 text-green-500">🔍</span>
//         </div>
//       </div>

//       {/* Icons + CTA */}
//       <div className="flex items-center space-x-4">
//         <FaBell className="text-2xl text-gray-600 cursor-pointer" />
//         <Link to="/user-cart" aria-label="Cart">
//           <FaShoppingCart className="text-2xl text-gray-600 cursor-pointer" />
//         </Link>
//         <Link to="/user-profile" aria-label="Profile">
//           <FaUserCircle className="text-2xl text-gray-600 cursor-pointer" />
//         </Link>
//         <Link to="/user-switch">
//           <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
//             Become an Owner
//           </button>
//         </Link>
//       </div>
//     </div>
//   </nav>
// );

// // ✅ HERO SECTION
// const HeroSection = () => (
//   <div className="text-center py-7 sm:py-10 px-3 bg-gradient-to-r from-green-100 to-blue-100">
//     <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 animate-pulse">
//       Empowering Local Shops Near You
//     </h2>
//     <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
//       Discover local stores, explore their products, and support your community
//       while enjoying a seamless offline-first shopping experience.
//     </p>
//   </div>
// );

// // ✅ SHOP CARD
// const ShopCard = ({ shop, sale }) => {
//   // Initialize followerCount from prop (number OR array length fallback)
//   const initialFollowerCount =
//     typeof shop.followers === "number"
//       ? shop.followers
//       : Array.isArray(shop.followers)
//       ? shop.followers.length
//       : 0;

//   const [followed, setFollowed] = useState(false);
//   const [followerCount, setFollowerCount] = useState(initialFollowerCount);

//   useEffect(() => {
//     const checkIfFollowed = async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:8000/api/v1/auth/user-profile",
//           {
//             withCredentials: true,
//           }
//         );
//         const following = res.data?.data?.followingShops || [];
//         setFollowed(following.includes(sale.shop._id));
//       } catch (err) {
//         console.error("Failed to fetch user profile:", err);
//       }
//     };
//     checkIfFollowed();
//   }, [sale.shop._id]);

//   const handleFollowToggle = async () => {
//     try {
//       const endpoint = followed
//         ? "http://localhost:8000/api/v1/auth/unfollowshop"
//         : "http://localhost:8000/api/v1/auth/followshop";
//       await axios.post(
//         endpoint,
//         { shopId: sale.shop._id },
//         { withCredentials: true }
//       );
//       setFollowed(!followed);
//       setFollowerCount((prev) => prev + (followed ? -1 : 1));
//     } catch (err) {
//       console.error("Failed to toggle follow:", err.response?.data || err);
//     }
//   };
//   console.log(shop.address);

//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden relative flex flex-col">
//       <div className="relative">
//         <img
//           src={shop.coverImage || coverImage}
//           alt="Cover"
//           className="w-full h-48 md:h-64 xl:h-72 object-cover"
//         />
//         <div className="absolute top-0 left-0 w-full h-full p-2 sm:p-4 flex flex-col justify-between">
//           <div>
//             <h2 className="text-base sm:text-lg font-bold text-gray-800">
//               {shop.name}
//             </h2>
//             <p className="inline-block px-3 py-1 text-xs sm:text-sm text-gray-600 bg-gray-200 rounded-full border border-gray-300">
//               📍 {shop.distance}km away from you
//             </p>
//             <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 text-xs">
//               {shop.tags?.map((tag, i) => (
//                 <span
//                   key={i}
//                   className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//           <button
//             onClick={handleFollowToggle}
//             className={`absolute top-2 right-2 sm:top-3 sm:right-3 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border transition-all ${
//               followed
//                 ? "bg-red-500 text-white border-red-600"
//                 : "bg-black text-white border-black"
//             }`}
//           >
//             {followed ? "❤️ Following" : "Follow"}
//           </button>
//         </div>
//       </div>
//       <div className="p-2 sm:p-4 space-y-1 sm:space-y-2 flex-1 flex flex-col justify-between">
//         <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500">
//           <span className="flex items-center gap-1">
//             <FaStar className="text-yellow-400" /> {shop.rating}
//           </span>
//         </div>
//         <hr className="my-1 sm:my-2" />
//         <div>
//           <h3 className="text-base sm:text-xl font-semibold text-gray-800">
//             {shop.productTitle}
//           </h3>

//           {shop.discount && (
//             <div className="flex items-center gap-2 text-xs sm:text-sm mt-1">
//               <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded">
//                 {shop.discount}% OFF
//               </span>
//               <span className="text-green-600 font-semibold">
//                 ${shop.salePrice}
//               </span>
//               <span className="line-through text-gray-400">
//                 ${shop.originalPrice}
//               </span>
//             </div>
//           )}
//         </div>
//         <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mt-2">
//           <span className="flex items-center gap-1 text-red-500">
//             <FaHeart /> {shop.likes}
//           </span>
//           <span className="border border-gray-200 rounded-full text-black px-2 py-1 rounded">
//             {shop.views} views
//           </span>
//         </div>
//         <div className="flex flex-col sm:flex-row gap-2 mt-2">
//           <Link
//             to={`/shop-info/${sale.shop?._id}`}
//             onClick={async (e) => {
//               e.preventDefault();
//               if (!sale?._id) {
//                 console.error("Invalid sale ID");
//                 return;
//               }
//               try {
//                 await axios.get(
//                   `http://localhost:8000/api/v1/shops/${sale.shop?._id}/getshopinfo`
//                 );
//                 window.location.href = `/shop-info/${sale.shop?._id}`; // <--- redirect manually
//               } catch (error) {
//                 console.error("Failed to increment views", error);
//               }
//             }}
//             className="w-full text-center bg-white border border-gray-300 text-gray-700 rounded px-2 sm:px-3 py-1 sm:py-2 hover:bg-gray-50 text-xs sm:text-base"
//           >
//             View Shop
//           </Link>
//           <Link
//             to={`/sales-info/${sale._id}`}
//             onClick={async (e) => {
//               e.preventDefault();
//               if (!sale?._id) {
//                 console.error("Invalid sale ID");
//                 return;
//               }
//               try {
//                 await axios.get(
//                   `http://localhost:8000/api/v1/sales/${sale._id}`
//                 );
//                 window.location.href = `/sales-info/${sale._id}`;
//               } catch (error) {
//                 console.error("Failed to increment views", error);
//               }
//             }}
//             className="w-full text-center bg-black text-white rounded px-2 sm:px-3 py-1 sm:py-2 hover:bg-gray-900 text-xs sm:text-base"
//           >
//             View Products
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ✅ SECTION SLIDER
// const HomeSectionSlider = ({ title, sales }) => {
//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1280, settings: { slidesToShow: 2 } },
//       { breakpoint: 768, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <div className="px-2 sm:px-4 md:px-6 py-4">
//       <h3 className="text-base sm:text-xl font-bold mb-2 text-gray-800">
//         {title}
//       </h3>
//       <Slider {...settings}>
//         {sales.map((sale, idx) => (
//           <div key={sale._id || idx} className="px-1 sm:px-2">
//             <ShopCard
//               shop={{
//                 _id: sale.shop?._id,
//                 name: sale.shop?.shopName || "Unknown Shop",
//                 address: sale.shop?.address || "Unknown address",
//                 distance: sale.shop?.distance
//                   ? (sale.shop.distance / 1000).toFixed(1)
//                   : "?",
//                 coverImage: sale.image || coverImage,
//                 tags: [sale.shop?.category || "Misc"],
//                 // Updated follower count logic here:
//                 followers: Array.isArray(sale.shop?.followers)
//                   ? sale.shop.followers.length
//                   : typeof sale.shop?.followerCount === "number"
//                   ? sale.shop.followerCount
//                   : 0,
//                 rating: sale.shop?.rating || 4.5,
//                 productTitle: sale.title,
//                 productDesc: sale.description,
//                 discount: sale.discount,
//                 salePrice: "?",
//                 originalPrice: "?",
//                 likes: 0,
//                 views: sale.views,
//               }}
//               sale={sale}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// // ✅ HOME PAGE MAIN
// const HomePage = () => {
//   const [sales, setSales] = useState([]);
//   const [page, setPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [category, setCategory] = useState("");
//   const [showNavbar, setShowNavbar] = useState(true);
//   const loaderRef = useRef();
//   const lastScrollTop = useRef(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScroll = window.scrollY;
//       if (currentScroll > lastScrollTop.current && currentScroll > 100) {
//         setShowNavbar(false);
//       } else {
//         setShowNavbar(true);
//       }
//       lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const fetchSales = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8000/api/v1/sales/getallsales",
//           { withCredentials: true }
//         );
//         console.log("API response data:", response.data);
//         const newSales = response.data?.data || [];
//         console.log("Parsed sales data:", newSales);
//         setSales(newSales);
//       } catch (error) {
//         console.error("Error fetching sales:", error);
//       }
//     };
//     fetchSales();
//   }, [page]);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         setPage((prev) => prev + 1);
//       }
//     });
//     if (loaderRef.current) {
//       observer.observe(loaderRef.current);
//     }
//     return () => observer.disconnect();
//   }, []);

//   const filteredSales = sales.filter((sale) => {
//     const matchesSearch = sale.title
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());
//     const matchesCategory = category
//       ? sale.shop?.category?.toLowerCase() === category.toLowerCase()
//       : true;
//     return matchesSearch && matchesCategory;
//   });
//   console.log("Filtered sales to render:", filteredSales);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div
//         className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
//           showNavbar ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <Navbar onSearchChange={setSearchTerm} onCategoryChange={setCategory} />
//       </div>
//       <div className="pt-24">
//         <HeroSection />
//         <HomeSectionSlider
//           title="🔥 Popular Nearby"
//           sales={filteredSales.slice(0, 6)}
//         />
//         {/* <HomeSectionSlider
//           title="🛒 Grocery Picks"
//           sales={filteredSales.slice(6, 12)}
//         /> */}
//         <HomeSectionSlider
//           title="🆕 Newly Added"
//           sales={filteredSales.slice(12, 18)}
//         />
//         <div className="text-center text-gray-500 mt-10">Or browse all</div>
//         <div className="p-2 sm:p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
//           {filteredSales.map((sale) => (
//             <ShopCard
//               key={sale._id}
//               shop={{
//                 _id: sale.shop?._id,
//                 name: sale.shop?.shopName || "Unknown",
//                 address: sale.shop?.address || "Uncategorized",
//                 distance: sale.shop?.distance
//                   ? (sale.shop.distance / 1000).toFixed(1)
//                   : "?",
//                 coverImage: sale.image || coverImage,
//                 tags: [sale.shop?.category || "Misc"],
//                 followers: Array.isArray(sale.shop?.followers)
//                   ? sale.shop.followers.length
//                   : typeof sale.shop?.followerCount === "number"
//                   ? sale.shop.followerCount
//                   : 0,
//                 rating: sale.shop?.rating || 4.5,
//                 productTitle: sale.title,
//                 productDesc: sale.description,
//                 discount: sale.discount,
//                 salePrice: "?",
//                 originalPrice: "?",
//                 likes: 0,
//                 views: sale.views,
//               }}
//               sale={sale}
//             />
//           ))}
//         </div>
//         <div
//           ref={loaderRef}
//           className="text-center py-10 text-gray-500 text-sm"
//         >
//           Loading more sales...
//         </div>
//         <footer className="text-center py-4 md:py-6 text-xs sm:text-sm text-gray-500">
//           © 2025 LocalLink. Connecting Communities.
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import { useEffect, useState, useRef } from "react";
import {
  FaBell,
  FaUserCircle,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaStar,
  FaHeart,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import coverImage from "../assets/home.bg.png";
import axios from "axios";

// ========== HERO SECTION ==========
const HeroSection = () => (
  <div className="text-center py-7 sm:py-10 px-3 bg-gradient-to-r from-green-100 to-blue-100">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 animate-pulse">
      Empowering Local Shops Near You
    </h2>
    <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
      Discover local stores, explore their products, and support your community
      while enjoying a seamless offline-first shopping experience.
    </p>
  </div>
);

// ========== USER DROPDOWN ==========
const UserDropdown = ({ onLogout, onProfile, show, onClose }) => {
  if (!show) return null;
  return (
    <div
      className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-xl border border-gray-100 z-50 animate-fade-in"
      onMouseLeave={onClose}
    >
      <button
        onClick={() => {
          onProfile();
          onClose();
        }}
        className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-800 hover:bg-green-50 rounded-t-xl transition"
      >
        <FaUserCircle className="text-green-500" />
        User Profile
      </button>
      <button
        onClick={() => {
          onLogout();
          onClose();
        }}
        className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-b-xl border-t border-gray-100 transition"
      >
        <FaSignOutAlt className="text-red-500" />
        Logout
      </button>
    </div>
  );
};

// ========== LOGOUT MODAL ==========
const ConfirmLogoutModal = ({ open, onConfirm, onCancel }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-[99]">
      <div className="bg-white rounded-xl px-6 py-6 max-w-sm w-full shadow-xl text-center border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-3">
          Confirm Logout
        </h3>
        <p className="text-gray-500 mb-6">
          Are you sure you want to logout?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-5 py-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 font-semibold transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600 font-bold transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

// ========== NAVBAR ==========
const Navbar = ({ onSearchChange, onCategoryChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };
    if (showDropdown) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showDropdown]);

  const handleLogout = async () => {
    setShowDropdown(false);
    setShowModal(true);
  };

  const confirmLogout = async () => {
    setShowModal(false);
    try {
      await axios.post(
        "http://localhost:8000/api/v1/auth/logout",
        {},
        { withCredentials: true }
      );
      navigate("/login");
    } catch {
      alert("Logout failed. Please try again.");
    }
  };

  const handleProfile = () => navigate("/user-profile");

  return (
    <nav className="w-full bg-white shadow">
      {/* Mobile Nav */}
      <div className="flex items-center justify-between px-4 py-2 md:hidden">
        <div className="flex items-center gap-2 text-green-600 font-bold text-lg">
          <FaMapMarkerAlt />
          LocalLink
        </div>
        <div className="flex items-center gap-2">
          <FaBell className="text-lg text-gray-600 cursor-pointer" />
          <Link to="/user-cart" aria-label="Cart">
            <FaShoppingCart className="text-lg text-gray-600 cursor-pointer" />
          </Link>
          <div className="relative" ref={dropdownRef}>
            <FaUserCircle
              className="text-lg text-gray-600 cursor-pointer hover:text-green-500"
              onClick={() => setShowDropdown((s) => !s)}
            />
            <UserDropdown
              show={showDropdown}
              onLogout={handleLogout}
              onProfile={handleProfile}
              onClose={() => setShowDropdown(false)}
            />
          </div>
          <Link to="/user-switch">
            <button className="bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 whitespace-nowrap">
              Become an Owner
            </button>
          </Link>
        </div>
      </div>
      <div className="flex md:hidden items-center gap-2 px-4 pb-2">
        <select
          onChange={(e) => onCategoryChange(e.target.value)}
          className="min-w-[65px] max-w-[90px] px-1 py-1 border-2 border-green-400 rounded-full bg-white text-[11px] text-gray-700"
        >
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="groceries">Groceries</option>
          <option value="others">Others</option>
        </select>
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search shops..."
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full p-2 pl-8 border-2 text-black border-green-400 rounded-full focus:outline-none text-xs"
          />
          <span className="absolute left-2 top-2 text-green-500 text-sm">🔍</span>
        </div>
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-2 text-green-600 font-bold text-2xl">
          <FaMapMarkerAlt />
          LocalLink
        </div>
        <div className="flex items-center space-x-4 w-1/2">
          <select
            onChange={(e) => onCategoryChange(e.target.value)}
            className="p-2 border-2 border-green-400 rounded-full bg-white text-gray-700"
          >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="groceries">Groceries</option>
            <option value="others">Others</option>
          </select>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search shops or categories..."
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full p-2 pl-10 border-2 text-black border-green-400 rounded-full focus:outline-none"
            />
            <span className="absolute left-3 top-2.5 text-green-500">🔍</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaBell className="text-2xl text-gray-600 cursor-pointer" />
          <Link to="/user-cart" aria-label="Cart">
            <FaShoppingCart className="text-2xl text-gray-600 cursor-pointer" />
          </Link>
          <div className="relative" ref={dropdownRef}>
            <FaUserCircle
              className="text-2xl text-gray-600 cursor-pointer hover:text-green-500"
              onClick={() => setShowDropdown((s) => !s)}
            />
            <UserDropdown
              show={showDropdown}
              onLogout={handleLogout}
              onProfile={handleProfile}
              onClose={() => setShowDropdown(false)}
            />
          </div>
          <Link to="/user-switch">
            <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
              Become an Owner
            </button>
          </Link>
        </div>
      </div>
      <ConfirmLogoutModal
        open={showModal}
        onConfirm={confirmLogout}
        onCancel={() => setShowModal(false)}
      />
    </nav>
  );
};

// ========== SHOP CARD (paste your unchanged code from before) ==========
const ShopCard = ({ shop, sale }) => {
  const initialFollowerCount =
    typeof shop.followers === "number"
      ? shop.followers
      : Array.isArray(shop.followers)
      ? shop.followers.length
      : 0;

  const [followed, setFollowed] = useState(false);
  const [followerCount, setFollowerCount] = useState(initialFollowerCount);

  useEffect(() => {
    const checkIfFollowed = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/v1/auth/user-profile",
          { withCredentials: true }
        );
        const following = res.data?.data?.followingShops || [];
        setFollowed(following.includes(sale.shop._id));
      } catch (err) {
        // optionally: handle error
        console.log(err)
      }
    };
    checkIfFollowed();
  }, [sale.shop._id]);

  const handleFollowToggle = async () => {
    try {
      const endpoint = followed
        ? "http://localhost:8000/api/v1/auth/unfollowshop"
        : "http://localhost:8000/api/v1/auth/followshop";
      await axios.post(
        endpoint,
        { shopId: sale.shop._id },
        { withCredentials: true }
      );
      setFollowed(!followed);
      setFollowerCount((prev) => prev + (followed ? -1 : 1));
    } catch (err) {
      // optionally: handle error
      console.log(err)
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden relative flex flex-col">
      <div className="relative">
        <img
          src={shop.coverImage || coverImage}
          alt="Cover"
          className="w-full h-48 md:h-64 xl:h-72 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full p-2 sm:p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-gray-800">
              {shop.name}
            </h2>
            <p className="inline-block px-3 py-1 text-xs sm:text-sm text-gray-600 bg-gray-200 rounded-full border border-gray-300">
              📍 {shop.distance}km away from you
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 text-xs">
              {shop.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={handleFollowToggle}
            className={`absolute top-2 right-2 sm:top-3 sm:right-3 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border transition-all ${
              followed
                ? "bg-red-500 text-white border-red-600"
                : "bg-black text-white border-black"
            }`}
          >
            {followed ? "❤️ Following" : "Follow"}
          </button>
        </div>
      </div>
      <div className="p-2 sm:p-4 space-y-1 sm:space-y-2 flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-400" /> {shop.rating}
          </span>
        </div>
        <hr className="my-1 sm:my-2" />
        <div>
          <h3 className="text-base sm:text-xl font-semibold text-gray-800">
            {shop.productTitle}
          </h3>
          {shop.discount && (
            <div className="flex items-center gap-2 text-xs sm:text-sm mt-1">
              <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded">
                {shop.discount}% OFF
              </span>
              <span className="text-green-600 font-semibold">
                ${shop.salePrice}
              </span>
              <span className="line-through text-gray-400">
                ${shop.originalPrice}
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mt-2">
          <span className="flex items-center gap-1 text-red-500">
            <FaHeart /> {shop.likes}
          </span>
          <span className="border border-gray-200 rounded-full text-black px-2 py-1 rounded">
            {shop.views} views
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-2">
          <Link
            to={`/shop-info/${sale.shop?._id}`}
            onClick={async (e) => {
              e.preventDefault();
              if (!sale?._id) {
                // eslint-disable-next-line
                return;
              }
              try {
                await axios.get(
                  `http://localhost:8000/api/v1/shops/${sale.shop?._id}/getshopinfo`
                );
                window.location.href = `/shop-info/${sale.shop?._id}`;
              } catch (error) {
                console.log(error)
              }
            }}
            className="w-full text-center bg-white border border-gray-300 text-gray-700 rounded px-2 sm:px-3 py-1 sm:py-2 hover:bg-gray-50 text-xs sm:text-base"
          >
            View Shop
          </Link>
          <Link
            to={`/sales-info/${sale._id}`}
            onClick={async (e) => {
              e.preventDefault();
              if (!sale?._id) {
                return;
              }
              try {
                await axios.get(
                  `http://localhost:8000/api/v1/sales/${sale._id}`
                );
                window.location.href = `/sales-info/${sale._id}`;
              } catch (error) {
                console.log(error)
              }
            }}
            className="w-full text-center bg-black text-white rounded px-2 sm:px-3 py-1 sm:py-2 hover:bg-gray-900 text-xs sm:text-base"
          >
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
};

// ========== HOME SECTION SLIDER ==========
const HomeSectionSlider = ({ title, sales }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="px-2 sm:px-4 md:px-6 py-4">
      <h3 className="text-base sm:text-xl font-bold mb-2 text-gray-800">
        {title}
      </h3>
      <Slider {...settings}>
        {sales.map((sale, idx) => (
          <div key={sale._id || idx} className="px-1 sm:px-2">
            <ShopCard
              shop={{
                _id: sale.shop?._id,
                name: sale.shop?.shopName || "Unknown Shop",
                address: sale.shop?.address || "Unknown address",
                distance: sale.shop?.distance
                  ? (sale.shop.distance / 1000).toFixed(1)
                  : "?",
                coverImage: sale.image || coverImage,
                tags: [sale.shop?.category || "Misc"],
                followers: Array.isArray(sale.shop?.followers)
                  ? sale.shop.followers.length
                  : typeof sale.shop?.followerCount === "number"
                  ? sale.shop.followerCount
                  : 0,
                rating: sale.shop?.rating || 4.5,
                productTitle: sale.title,
                productDesc: sale.description,
                discount: sale.discount,
                salePrice: "?",
                originalPrice: "?",
                likes: 0,
                views: sale.views,
              }}
              sale={sale}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// ========== HOME PAGE MAIN ==========
const HomePage = () => {
  const [sales, setSales] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [showNavbar, setShowNavbar] = useState(true);
  const loaderRef = useRef();
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollTop.current && currentScroll > 100)
        setShowNavbar(false);
      else setShowNavbar(true);
      lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/sales/getallsales",
          { withCredentials: true }
        );
        setSales(response.data?.data || []);
      } catch (error) {
        // optionally: handle error
        console.log(error)
      }
    };
    fetchSales();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setPage((prev) => prev + 1);
    });
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredSales = sales.filter((sale) => {
    const matchesSearch = sale.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = category
      ? sale.shop?.category?.toLowerCase() === category.toLowerCase()
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar onSearchChange={setSearchTerm} onCategoryChange={setCategory} />
      </div>
      <div className="pt-24">
        <HeroSection />
        <HomeSectionSlider
          title="🔥 Popular Nearby"
          sales={filteredSales.slice(0, 6)}
        />
        <HomeSectionSlider
          title="🆕 Newly Added"
          sales={filteredSales.slice(12, 18)}
        />
        <div className="text-center text-gray-500 mt-10">Or browse all</div>
        <div className="p-2 sm:p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {filteredSales.map((sale) => (
            <ShopCard
              key={sale._id}
              shop={{
                _id: sale.shop?._id,
                name: sale.shop?.shopName || "Unknown",
                address: sale.shop?.address || "Uncategorized",
                distance: sale.shop?.distance
                  ? (sale.shop.distance / 1000).toFixed(1)
                  : "?",
                coverImage: sale.image || coverImage,
                tags: [sale.shop?.category || "Misc"],
                followers: Array.isArray(sale.shop?.followers)
                  ? sale.shop.followers.length
                  : typeof sale.shop?.followerCount === "number"
                  ? sale.shop.followerCount
                  : 0,
                rating: sale.shop?.rating || 4.5,
                productTitle: sale.title,
                productDesc: sale.description,
                discount: sale.discount,
                salePrice: "?",
                originalPrice: "?",
                likes: 0,
                views: sale.views,
              }}
              sale={sale}
            />
          ))}
        </div>
        <div
          ref={loaderRef}
          className="text-center py-10 text-gray-500 text-sm"
        >
          Loading more sales...
        </div>
        <footer className="text-center py-4 md:py-6 text-xs sm:text-sm text-gray-500">
          © 2025 LocalLink. Connecting Communities.
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
