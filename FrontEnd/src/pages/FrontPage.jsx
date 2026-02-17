// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaMapMarkerAlt,
//   FaVideo,
//   FaStore,
//   FaUserFriends,
//   FaSearch,
//   FaChartLine,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
//hi
// export default function FrontPage() {
//   return (
//     <div className="bg-[#001e2b] text-white font-sans">
//       {/* Navbar */}
//       <header className="flex justify-between items-center px-10 py-6 shadow-md">
//         <h1 className="text-3xl font-extrabold text-green-400">LocalLink</h1>
//         <nav className="flex gap-6">
//           <button className="hover:text-green-400">Product</button>
//           <button className="hover:text-green-400">How it Works</button>
//           <button className="hover:text-green-400">Benefits</button>
//           <button className="hover:text-green-400">Login</button>
//           <Link to="/login">
//             <button className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded font-semibold transition">
//               Get Started
//             </button>
//           </Link>
//         </nav>
//       </header>

//       {/* Hero */}
//       <section className="flex flex-col lg:flex-row items-center px-12 py-20 bg-[#00111a] gap-16">
//         <div className="lg:w-1/2">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl font-extrabold mb-6 leading-tight"
//           >
//             Revolutionizing <span className="text-green-400">Local Shopping</span> for the Digital Age
//           </motion.h2>
//           <p className="text-gray-300 text-lg mb-8">
//             LocalLink helps users discover nearby stores within a 10km radius, view real-time product posts, reels, sales info, and directly visit shops. Shop owners engage more and grow locally.
//           </p>
//           <div className="flex gap-4">
//             <Link to="/signup">
//                <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded font-semibold">Get Started</button>
//             </Link>
//             <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black">Learn More</button>
//           </div>
//         </div>

//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="lg:w-1/2"
//         >
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/5700/5700428.png"
//             alt="Illustration"
//             className="w-full max-w-md mx-auto"
//           />
//         </motion.div>
//       </section>

//       {/* Feature Sections */}
//       <section className="px-12 py-20 bg-white text-black">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
//           <div className="flex gap-6">
//             <FaMapMarkerAlt size={40} className="text-green-500" />
//             <div>
//               <h3 className="text-2xl font-semibold mb-2">Live Store Discovery</h3>
//               <p className="text-gray-700">
//                 Using geolocation, LocalLink recommends real nearby shops to users within a 10km radius. Discover groceries, clothing, and gadgets in your own neighborhood — instantly.
//               </p>
//             </div>
//           </div>
//           <div className="flex gap-6">
//             <FaVideo size={40} className="text-green-500" />
//             <div>
//               <h3 className="text-2xl font-semibold mb-2">Interactive Reels</h3>
//               <p className="text-gray-700">
//                 Shops can upload short reels to display products, sales, or customer feedback. Engage users visually and give them a reason to walk in.
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-6">
//             <FaStore size={40} className="text-green-500" />
//             <div>
//               <h3 className="text-2xl font-semibold mb-2">Multi-Category Shops</h3>
//               <p className="text-gray-700">
//                 Shop owners can manage multiple stores across various categories. Every product post is like a social card — making shopping as easy as scrolling.
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-6">
//             <FaUserFriends size={40} className="text-green-500" />
//             <div>
//               <h3 className="text-2xl font-semibold mb-2">Follow & Connect</h3>
//               <p className="text-gray-700">
//                 Follow favorite shops and get notified when they post new items or launch sales. The more follows, the more reach for the store.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Benefits CTA */}
//       <section className="px-12 py-20 bg-[#001e2b] text-white text-center">
//         <h2 className="text-3xl font-bold mb-6">Why Choose LocalLink?</h2>
//         <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
//           <div className="p-6 bg-[#022b3a] rounded-xl">
//             <FaSearch size={30} className="text-green-400 mx-auto mb-4" />
//             <h4 className="font-semibold text-xl mb-2">Category Search</h4>
//             <p className="text-gray-300">Search stores by categories — from shoes to electronics — and only get results near you.</p>
//           </div>
//           <div className="p-6 bg-[#022b3a] rounded-xl">
//             <FaChartLine size={30} className="text-green-400 mx-auto mb-4" />
//             <h4 className="font-semibold text-xl mb-2">Boost Local Economy</h4>
//             <p className="text-gray-300">Every visit to a local shop through our platform helps revive small businesses.</p>
//           </div>
//           <div className="p-6 bg-[#022b3a] rounded-xl">
//             <FaUserFriends size={30} className="text-green-400 mx-auto mb-4" />
//             <h4 className="font-semibold text-xl mb-2">Community First</h4>
//             <p className="text-gray-300">Support your community, stay local, and shop with intent. We help you connect better.</p>
//           </div>
//         </div>
//         <button className="mt-10 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold shadow-md">
//           Start Exploring Local Shops
//         </button>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-10 bg-[#000e14] text-gray-400">
//         © 2025 LocalLink. All rights reserved.
//       </footer>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaVideo,
  FaStore,
  FaUserFriends,
  FaSearch,
  FaChartLine,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FrontPage() {
  return (
    <div className="bg-[#001e2b] text-white font-sans">
      {/* Navbar */}
      <header className="flex flex-wrap justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 shadow-md">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-green-400">LocalLink</h1>
        <nav className="flex gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-0 flex-wrap items-center">
          <button className="hover:text-green-400 transition-colors text-base sm:text-lg">Product</button>
          <button className="hover:text-green-400 transition-colors text-base sm:text-lg">How it Works</button>
          <button className="hover:text-green-400 transition-colors text-base sm:text-lg">Benefits</button>
          <Link to="/login">
            <button className="hover:text-green-400 transition-colors text-base sm:text-lg">Login</button>
          </Link>
          <Link to="/signup">
            <button className="bg-green-500 hover:bg-green-600 px-4 sm:px-5 py-2 rounded font-semibold transition-all text-base sm:text-lg hover:shadow-lg">
              Get Started
            </button>
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col-reverse lg:flex-row items-center px-4 sm:px-8 md:px-12 py-12 md:py-16 lg:py-20 bg-[#00111a] gap-10 lg:gap-16">
        <div className="lg:w-1/2 w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight"
          >
            Revolutionizing <span className="text-green-400">Local Shopping</span> for the Digital Age
          </motion.h2>
          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
            LocalLink helps users discover nearby stores within a 10km radius, view real-time product posts, reels, sales info, and directly visit shops. Shop owners engage more and grow locally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup">
              <button className="bg-green-500 hover:bg-green-600 px-5 sm:px-6 py-3 rounded font-semibold transition-all hover:shadow-lg hover:scale-105">
                Get Started
              </button>
            </Link>
            <button className="border border-white px-5 sm:px-6 py-3 rounded hover:bg-white hover:text-black transition-all">
              Learn More
            </button>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 w-full mb-8 lg:mb-0"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/5700/5700428.png"
            alt="Illustration"
            className="w-48 sm:w-64 md:w-80 lg:w-full max-w-md mx-auto"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-8 md:px-12 py-12 md:py-20 bg-white text-black">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-gray-800">Powerful Features</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="flex gap-4 sm:gap-6">
            <FaMapMarkerAlt size={36} className="sm:size-40 text-green-500" />
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">Live Store Discovery</h3>
              <p className="text-gray-700 text-base sm:text-lg">
                Using geolocation, LocalLink recommends real nearby shops to users within a 10km radius. Discover groceries, clothing, and gadgets in your own neighborhood — instantly.
              </p>
            </div>
          </div>
          <div className="flex gap-4 sm:gap-6">
            <FaVideo size={36} className="sm:size-40 text-green-500" />
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">Interactive Reels</h3>
              <p className="text-gray-700 text-base sm:text-lg">
                Shops can upload short reels to display products, sales, or customer feedback. Engage users visually and give them a reason to walk in.
              </p>
            </div>
          </div>

          <div className="flex gap-4 sm:gap-6">
            <FaStore size={36} className="sm:size-40 text-green-500" />
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">Multi-Category Shops</h3>
              <p className="text-gray-700 text-base sm:text-lg">
                Shop owners can manage multiple stores across various categories. Every product post is like a social card — making shopping as easy as scrolling.
              </p>
            </div>
          </div>

          <div className="flex gap-4 sm:gap-6">
            <FaUserFriends size={36} className="sm:size-40 text-green-500" />
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">Follow & Connect</h3>
              <p className="text-gray-700 text-base sm:text-lg">
                Follow favorite shops and get notified when they post new items or launch sales. The more follows, the more reach for the store.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits CTA */}
      <section className="px-4 sm:px-8 md:px-12 py-12 md:py-20 bg-[#001e2b] text-white text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6">Why Choose LocalLink?</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          <div className="p-4 sm:p-6 bg-[#022b3a] rounded-xl">
            <FaSearch size={28} className="sm:size-30 text-green-400 mx-auto mb-3 sm:mb-4" />
            <h4 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Category Search</h4>
            <p className="text-gray-300 text-base">Search stores by categories — from shoes to electronics — and only get results near you.</p>
          </div>
          <div className="p-4 sm:p-6 bg-[#022b3a] rounded-xl">
            <FaChartLine size={28} className="sm:size-30 text-green-400 mx-auto mb-3 sm:mb-4" />
            <h4 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Boost Local Economy</h4>
            <p className="text-gray-300 text-base">Every visit to a local shop through our platform helps revive small businesses.</p>
          </div>
          <div className="p-4 sm:p-6 bg-[#022b3a] rounded-xl">
            <FaUserFriends size={28} className="sm:size-30 text-green-400 mx-auto mb-3 sm:mb-4" />
            <h4 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Community First</h4>
            <p className="text-gray-300 text-base">Support your community, stay local, and shop with intent. We help you connect better.</p>
          </div>
        </div>
        <Link to="/signup">
          <button className="mt-8 sm:mt-10 bg-green-500 hover:bg-green-600 px-4 sm:px-6 py-3 rounded-lg font-semibold shadow-md text-base sm:text-lg transition-all hover:shadow-xl hover:scale-105">
            Start Exploring Local Shops
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 md:py-10 bg-[#000e14] text-gray-400 text-sm md:text-base">
        © 2025 LocalLink. All rights reserved.
      </footer>
    </div>
  );
}
