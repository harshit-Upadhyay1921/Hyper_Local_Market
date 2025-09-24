// import React from 'react'
// import SearchBar from './SearchBar.jsx'

// function Navbar() {
//   return (
//     <div className="navbar bg-base-100 shadow-xl rounded-2xl " data-theme="cupcake">
//       <div className="flex-1">
//         <a className="btn btn-ghost text-xl">Snatch</a>
//       </div>

//       <div className="flex gap-6 items-center">
//         <SearchBar
//         />

//         {/* Cart Dropdown */}
//         <div className="dropdown dropdown-end">
//           <div
//             tabIndex={0}
//             role="button"
//             className="btn btn-ghost btn-circle"
//           >
//             🛒
//           </div>
//           <div
//             tabIndex={0}
//             className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow"
//           >
//             <div className="card-body">
//               <span className="text-lg font-bold">8 Items</span>
//               <span className="text-info">Subtotal: $999</span>
//               <div className="card-actions">
//                 <button className="btn btn-primary btn-block">View cart</button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Profile Dropdown */}
//         <div className="dropdown dropdown-end">
//           <div
//             tabIndex={0}
//             role="button"
//             className="btn btn-ghost btn-circle avatar"
//           >
//             <div className="w-10 rounded-full">
//               <img
//                 alt="Profile avatar"
//                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//               />
//             </div>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
//           >
//             <li>
//               <a className="justify-between">
//                 Profile
//                 <span className="badge">New</span>
//               </a>
//             </li>
//             <li><a>Settings</a></li>
//             <li><a>Logout</a></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar

export default function Navbar({ onSearchChange, onCategoryChange }){ 
  <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
    <div className="text-green-600 text-2xl font-bold flex items-center gap-2">
      <FaMapMarkerAlt className="text-green-600" /> LocalLink
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
      <FaShoppingCart className="text-2xl text-gray-600 cursor-pointer" />
      <FaUserCircle className="text-2xl text-gray-600 cursor-pointer" />
      <Link to="/owner">
        <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
          Become an Owner
        </button>
      </Link>
    </div>
  </nav>

}