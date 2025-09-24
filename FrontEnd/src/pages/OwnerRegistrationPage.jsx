// import { useState } from "react";
// import { FaArrowLeft } from "react-icons/fa";
// import axios from "axios";

// export default function CreateShopPage() {
//   const [formData, setFormData] = useState({});
//   const [logoPreview, setLogoPreview] = useState(null);
//   const [coverPreview, setCoverPreview] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const handleFileUpload = (e, type) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       if (type === "logo") setLogoPreview(reader.result);
//       if (type === "cover") setCoverPreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className="bg-[#f5f6f8] min-h-screen px-6 py-8 text-black font-inter">
//       <div className="max-w-4xl mx-auto space-y-6">
//         {/* Header */}
//         <div className="text-sm text-gray-600 flex items-center gap-2">
//           <FaArrowLeft className="text-xs" /> Back to Dashboard
//         </div>

//         <h1 className="text-2xl font-semibold text-center">Create New Shop</h1>

//         {/* Basic Info */}
//         <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 space-y-4">
//           <h2 className="text-lg font-semibold text-gray-800">Basic Information</h2>
//           <div className="grid md:grid-cols-2 gap-4">
//             <input className="border border-gray-300 rounded-lg px-4 py-2 w-full" placeholder="Shop Name *" />
//             <input className="border border-gray-300 rounded-lg px-4 py-2 w-full" placeholder="Email *" />
//             <textarea className="border border-gray-300 rounded-lg px-4 py-2 w-full md:col-span-2" placeholder="Description" />
//             <input className="border border-gray-300 rounded-lg px-4 py-2 w-full" placeholder="Phone Number" />
//             <input className="border border-gray-300 rounded-lg px-4 py-2 w-full" placeholder="Address *" />
//           </div>
//         </div>

//         {/* Categories */}
//         <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6">
//           <h2 className="text-lg font-semibold mb-4">Select Category</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//             {["Clothing", "Electronics", "Grocery", "Food", "Books", "Sports", "Beauty", "Home & Garden", "Automotive", "Health"].map((cat) => (
//               <div
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`text-base border rounded-xl px-4 py-2 text-center cursor-pointer transition-all duration-150 ${selectedCategory === cat ? "bg-black text-white border-black" : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"}`}
//               >
//                 {cat}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Shop Images */}
//         <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6">
//           <h2 className="text-lg font-semibold mb-4">Upload Shop Images</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {[{ label: "Shop Logo", preview: logoPreview, type: "logo" }, { label: "Cover Image", preview: coverPreview, type: "cover" }].map(({ label, preview, type }) => (
//               <div key={label} className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center bg-white">
//                 {preview ? (
//                   <img src={preview} alt={label} className="mx-auto h-28 object-contain rounded-md mb-2" />
//                 ) : (
//                   <div className="text-3xl text-gray-400 mb-2">⬆️</div>
//                 )}
//                 <p className="text-sm text-gray-800 font-medium">{label}</p>
//                 <p className="text-xs text-gray-500 mb-1">PNG, JPG up to 5MB</p>
//                 <label className="inline-block mt-2 text-white bg-black px-4 py-2 rounded-lg cursor-pointer">
//                   Choose File
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => handleFileUpload(e, type)}
//                     className="hidden"
//                   />
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Opening Hours */}
//         <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6">
//           <h2 className="text-lg font-semibold mb-4">Opening Hours</h2>
//           <div className="space-y-4 text-sm">
//             {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
//               <div key={day} className="flex flex-wrap items-center gap-3">
//                 <span className="w-24 font-medium">{day}</span>
//                 <label className="flex items-center gap-2">
//                   <input type="checkbox" defaultChecked className="accent-black" /> Open
//                 </label>
//                 <input type="time" className="border border-gray-300 rounded-lg px-3 py-1.5" defaultValue="09:00" />
//                 <span>to</span>
//                 <input type="time" className="border border-gray-300 rounded-lg px-3 py-1.5" defaultValue="18:00" />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-end gap-3">
//           <button className="px-5 py-2 border border-gray-300 rounded-lg">Cancel</button>
//           <button className="px-5 py-2 bg-black text-white rounded-lg">Create Shop</button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CreateShopPage() {
  const [formData, setFormData] = useState({
    shopName: "",
    address: "",
    contactDetails: "",
  });
  const [shopImage, setShopImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (type === "logo") {
        setLogoPreview(reader.result);
        setShopImage(file);
      } else if (type === "cover") {
        setCoverPreview(reader.result);
        setCoverImage(file);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    if (!formData.shopName || !formData.address || !formData.contactDetails || !selectedCategory || !shopImage || !coverImage) {
      alert("Please fill all required fields");
      return;
    }

    const location = {
      type: "Point",
      coordinates: [77.1025, 28.7041], // Replace with dynamic coords later
    };

    const data = new FormData();
    data.append("shopName", formData.shopName);
    data.append("address", formData.address);
    data.append("contactDetails", formData.contactDetails);
    data.append("category", selectedCategory);
    data.append("location", JSON.stringify(location));
    data.append("shopImage", shopImage);
    data.append("coverImage", coverImage);

    try {
      const res = await axios.post("http://localhost:8000/api/v1/shops/shopregister", data, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Shop created:", res.data);
      alert("Shop registered successfully!");
      // Optionally: navigate("/dashboard") or show confirmation UI
    } catch (error) {
      console.error("Error creating shop:", error.response?.data || error.message);
      alert("Failed to register shop.");
    }
  };

  return (
    <div className="bg-[#f5f6f8] min-h-screen px-6 py-8 text-black font-inter">
      <div className="max-w-4xl mx-auto space-y-6">
        <Link to="/user-switch">
          <div className="text-sm text-gray-600 flex items-center gap-2">
           <FaArrowLeft className="text-xs" /> Back to Dashboard
          </div>
        </Link>

        <h1 className="text-2xl font-semibold text-center">Create New Shop</h1>

        {/* Basic Info */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Basic Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="shopName"
              value={formData.shopName}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              placeholder="Shop Name *"
            />
            <input
              name="email"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              placeholder="Email * (optional)"
            />
            <textarea
              className="border border-gray-300 rounded-lg px-4 py-2 w-full md:col-span-2"
              placeholder="Description (optional)"
            />
            <input
              name="contactDetails"
              value={formData.contactDetails}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              placeholder="Phone Number *"
            />
            <input
              name="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              placeholder="Address *"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Select Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {["clothing", "electronics", "grocery", "others"].map((cat) => (
              <div
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`capitalize text-base border rounded-xl px-4 py-2 text-center cursor-pointer transition-all duration-150 ${
                  selectedCategory === cat
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Shop Images */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Upload Shop Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[{ label: "Shop Logo", preview: logoPreview, type: "logo" }, { label: "Cover Image", preview: coverPreview, type: "cover" }].map(({ label, preview, type }) => (
              <div key={label} className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center bg-white">
                {preview ? (
                  <img src={preview} alt={label} className="mx-auto h-28 object-contain rounded-md mb-2" />
                ) : (
                  <div className="text-3xl text-gray-400 mb-2">⬆️</div>
                )}
                <p className="text-sm text-gray-800 font-medium">{label}</p>
                <p className="text-xs text-gray-500 mb-1">PNG, JPG up to 5MB</p>
                <label className="inline-block mt-2 text-white bg-black px-4 py-2 rounded-lg cursor-pointer">
                  Choose File
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, type)}
                    className="hidden"
                  />
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Opening Hours (Static for now) */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Opening Hours</h2>
          <div className="space-y-4 text-sm">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
              <div key={day} className="flex flex-wrap items-center gap-3">
                <span className="w-24 font-medium">{day}</span>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="accent-black" /> Open
                </label>
                <input type="time" className="border border-gray-300 rounded-lg px-3 py-1.5" defaultValue="09:00" />
                <span>to</span>
                <input type="time" className="border border-gray-300 rounded-lg px-3 py-1.5" defaultValue="18:00" />
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button className="px-5 py-2 border border-gray-300 rounded-lg">Cancel</button>
          <button onClick={handleSubmit} className="px-5 py-2 bg-black text-white rounded-lg">
            Create Shop
          </button>
        </div>
      </div>
    </div>
  );
}
