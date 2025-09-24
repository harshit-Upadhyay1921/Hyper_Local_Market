// import React, { useState } from "react";
// import { FaArrowLeft } from "react-icons/fa";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function CreateSale() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     discount: "",
//     startDate: "",
//     endDate: "",
//     saleImage: null,
//   });

//   const [preview, setPreview] = useState(null);

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;

//     if (type === "file") {
//       const file = files[0];
//       if (file) {
//         setFormData((prev) => ({ ...prev, [name]: file }));

//         const reader = new FileReader();
//         reader.onloadend = () => setPreview(reader.result);
//         reader.readAsDataURL(file);
//       }
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("title", formData.title);
//     data.append("description", formData.description);
//     data.append("discount", formData.discount);
//     data.append("startDate", formData.startDate);
//     data.append("endDate", formData.endDate);
//     data.append("saleImage", formData.saleImage); // This is important for backend

//     try {
//       const res = await axios.post(
//         "http://localhost:8000/api/v1/shops/registerSales",
//         data,
//         {
//           withCredentials: true,
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       alert("Sale created successfully!");
//       navigate("/home");
//     } catch (err) {
//       console.error("Error creating sale:", err.response?.data || err.message);
//       alert("Failed to create sale.");
//     }
//   };

//   return (
//     <div className="bg-white min-h-screen px-4 py-10 text-black font-inter flex items-start justify-center">
//       <div className="w-full max-w-xl">
//         <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 space-y-6 min-h-[90vh] flex flex-col justify-between">
//           {/* 🔙 Back Button */}
//           <div
//             className="text-sm text-gray-600 flex items-center gap-2 cursor-pointer hover:text-black transition duration-150"
//             onClick={() => navigate("/home")}
//           >
//             <FaArrowLeft className="text-xs" />
//             Back to Dashboard
//           </div>

//           {/* 🏷️ Header */}
//           <div className="text-center">
//             <h1 className="text-2xl font-bold text-gray-800">Create Sale</h1>
//             <p className="text-sm text-gray-500">
//               Fill in the details to create a new sale for your shop
//             </p>
//           </div>

//           {/* 📝 Form */}
//           <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-5 flex-1">
//             {/* Sale Details */}
//             <div className="space-y-4">
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Sale Title *"
//                 value={formData.title}
//                 onChange={handleChange}
//                 required
//                 className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//               />
//               <input
//                 type="number"
//                 name="discount"
//                 placeholder="Discount % *"
//                 min="1"
//                 max="100"
//                 value={formData.discount}
//                 onChange={handleChange}
//                 required
//                 className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//               />
//               <textarea
//                 name="description"
//                 placeholder="Sale Description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 rows={4}
//                 className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//               />
//             </div>

//             {/* Date Fields */}
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Start Date
//                 </label>
//                 <input
//                   type="date"
//                   name="startDate"
//                   value={formData.startDate}
//                   onChange={handleChange}
//                   required
//                   className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   End Date
//                 </label>
//                 <input
//                   type="date"
//                   name="endDate"
//                   value={formData.endDate}
//                   onChange={handleChange}
//                   required
//                   className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//                 />
//               </div>
//             </div>

//             {/* 🖼️ Image Upload */}
//             <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center bg-white">
//               {preview ? (
//                 <img
//                   src={preview}
//                   alt="Preview"
//                   className="mx-auto h-32 object-contain rounded-md mb-2"
//                 />
//               ) : (
//                 <div className="text-3xl text-gray-400 mb-2">⬆️</div>
//               )}
//               <p className="text-sm text-gray-800 font-medium">Sale Image</p>
//               <p className="text-xs text-gray-500 mb-1">PNG, JPG up to 5MB</p>
//               <label className="inline-block mt-2 text-white bg-black px-4 py-2 rounded-lg cursor-pointer">
//                 Choose File
//                 <input
//                   type="file"
//                   name="saleImage"
//                   accept="image/*"
//                   onChange={handleChange}
//                   className="hidden"
//                 />
//               </label>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-end gap-3 pt-4">
//               <button
//                 type="button"
//                 className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700"
//                 onClick={() => navigate("/home")}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-900"
//               >
//                 Create Sale
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }



//-----------------------------------------------------------------------------

// Updated CreateSale.jsx with checkbox to enable coupon generation
// import React, { useState } from "react";
// import { FaArrowLeft } from "react-icons/fa";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function CreateSale() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     discount: "",
//     startDate: "",
//     endDate: "",
//     saleImage: null,
//     generateCoupon: false,
//     couponDiscount: "",
//     couponExpiry: "",
//   });

//   const [preview, setPreview] = useState(null);

//   const handleChange = (e) => {
//     const { name, value, type, files, checked } = e.target;

//     if (type === "file") {
//       const file = files[0];
//       if (file) {
//         setFormData((prev) => ({ ...prev, [name]: file }));
//         const reader = new FileReader();
//         reader.onloadend = () => setPreview(reader.result);
//         reader.readAsDataURL(file);
//       }
//     } else if (type === "checkbox") {
//       setFormData((prev) => ({ ...prev, [name]: checked }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.generateCoupon) {
//       const start = new Date(formData.startDate);
//       const expiry = new Date(formData.couponExpiry);

//       if (expiry < start) {
//         alert("Coupon expiry should be after sale start date");
//         return;
//       }

//       if (!formData.couponDiscount || formData.couponDiscount <= 0) {
//         alert("Enter a valid coupon discount");
//         return;
//       }
//     }

//     const data = new FormData();
//     data.append("title", formData.title);
//     data.append("description", formData.description);
//     data.append("discount", formData.discount);
//     data.append("startDate", formData.startDate);
//     data.append("endDate", formData.endDate);
//     data.append("saleImage", formData.saleImage);
//     data.append("generateCoupon", formData.generateCoupon);

//     if (formData.generateCoupon) {
//       data.append("couponDiscount", formData.couponDiscount);
//       data.append("couponExpiry", formData.couponExpiry);
//     }

//     try {
//       // eslint-disable-next-line no-unused-vars
//       const res = await axios.post(
//         "http://localhost:8000/api/v1/shops/registerSales",
//         data,
//         {
//           withCredentials: true,
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       alert("Sale created successfully!");
//       navigate("/home");
//     } catch (err) {
//       console.error("Error creating sale:", err.response?.data || err.message);
//       alert("Failed to create sale.");
//     }
//   };

//   return (
//     <div className="bg-white min-h-screen px-4 py-10 text-black font-inter flex items-start justify-center">
//       <div className="w-full max-w-xl">
//         <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 space-y-6 min-h-[90vh] flex flex-col justify-between">
//           <div
//             className="text-sm text-gray-600 flex items-center gap-2 cursor-pointer hover:text-black transition duration-150"
//             onClick={() => navigate("/home")}
//           >
//             <FaArrowLeft className="text-xs" />
//             Back to Dashboard
//           </div>

//           <div className="text-center">
//             <h1 className="text-2xl font-bold text-gray-800">Create Sale</h1>
//             <p className="text-sm text-gray-500">
//               Fill in the details to create a new sale for your shop
//             </p>
//           </div>

//           <form
//             onSubmit={handleSubmit}
//             encType="multipart/form-data"
//             className="space-y-5 flex-1"
//           >
//             <div className="space-y-4">
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Sale Title *"
//                 value={formData.title}
//                 onChange={handleChange}
//                 required
//                 className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//               />
//               <input
//                 type="number"
//                 name="discount"
//                 placeholder="Discount % *"
//                 min="1"
//                 max="100"
//                 value={formData.discount}
//                 onChange={handleChange}
//                 required
//                 className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//               />
//               <textarea
//                 name="description"
//                 placeholder="Sale Description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 rows={4}
//                 className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//               />

//               <label className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   name="generateCoupon"
//                   checked={formData.generateCoupon}
//                   onChange={handleChange}
//                   className="form-checkbox text-black"
//                 />
//                 <span className="text-sm text-gray-800">
//                   Automatically generate coupon for this sale
//                 </span>
//               </label>

//               {formData.generateCoupon && (
//                 <div className="space-y-3 border border-gray-300 rounded-lg p-4 bg-gray-50">
//                   <input
//                     type="number"
//                     name="couponDiscount"
//                     placeholder="Extra Coupon Discount %"
//                     min="1"
//                     max="100"
//                     value={formData.couponDiscount}
//                     onChange={handleChange}
//                     required
//                     className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//                   />
//                   <input
//                     type="date"
//                     name="couponExpiry"
//                     value={formData.couponExpiry}
//                     onChange={handleChange}
//                     required
//                     className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//                   />
//                 </div>
//               )}
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Start Date
//                 </label>
//                 <input
//                   type="date"
//                   name="startDate"
//                   value={formData.startDate}
//                   onChange={handleChange}
//                   required
//                   className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   End Date
//                 </label>
//                 <input
//                   type="date"
//                   name="endDate"
//                   value={formData.endDate}
//                   onChange={handleChange}
//                   required
//                   className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//                 />
//               </div>
//             </div>

//             <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center bg-white">
//               {preview ? (
//                 <img
//                   src={preview}
//                   alt="Preview"
//                   className="mx-auto h-32 object-contain rounded-md mb-2"
//                 />
//               ) : (
//                 <div className="text-3xl text-gray-400 mb-2">⬆️</div>
//               )}
//               <p className="text-sm text-gray-800 font-medium">Sale Image</p>
//               <p className="text-xs text-gray-500 mb-1">PNG, JPG up to 5MB</p>
//               <label className="inline-block mt-2 text-white bg-black px-4 py-2 rounded-lg cursor-pointer">
//                 Choose File
//                 <input
//                   type="file"
//                   name="saleImage"
//                   accept="image/*"
//                   onChange={handleChange}
//                   className="hidden"
//                 />
//               </label>
//             </div>

//             <div className="flex justify-end gap-3 pt-4">
//               <button
//                 type="button"
//                 className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700"
//                 onClick={() => navigate("/home")}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-900"
//               >
//                 Create Sale
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateSale() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    discount: "",
    startDate: "",
    endDate: "",
    saleImage: null,
    generateCoupon: false,
    couponDiscount: "",
    couponExpiry: "",
  });

  const [preview, setPreview] = useState(null);
  const [productImages, setProductImages] = useState([]);
  const [galleryPreviews, setGalleryPreviews] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;

    if (type === "file" && name === "saleImage") {
      const file = files[0];
      if (file) {
        setFormData((prev) => ({ ...prev, [name]: file }));
        const reader = new FileReader();
        reader.onloadend = () => setPreview(reader.result);
        reader.readAsDataURL(file);
      }
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleProductImagesChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 7); // Limit to 7 files
    setProductImages(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setGalleryPreviews(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     if (!formData.generateCoupon) {
    alert("Generating a coupon is required for creating a sale. Please check the box.");
    return;
  }

    if (formData.generateCoupon) {
      const start = new Date(formData.startDate);
      const expiry = new Date(formData.couponExpiry);

      if (expiry < start) {
        alert("Coupon expiry should be after the sale start date");
        return;
      }

      if (!formData.couponDiscount || formData.couponDiscount <= 0) {
        alert("Enter a valid coupon discount");
        return;
      }
    }

    if (productImages.length > 7) {
      alert("You can upload a maximum of 7 product images.");
      return;
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("discount", formData.discount);
    data.append("startDate", formData.startDate);
    data.append("endDate", formData.endDate);
    data.append("saleImage", formData.saleImage);
    data.append("generateCoupon", formData.generateCoupon);

    if (formData.generateCoupon) {
      data.append("couponDiscount", formData.couponDiscount);
      data.append("couponExpiry", formData.couponExpiry);
    }

    productImages.forEach((file) => {
      data.append("productImages", file);
    });

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/shops/registerSales",
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Sale created successfully!");
      navigate("/home");
    } catch (err) {
      console.error("Error creating sale:", err.response?.data || err.message);
      alert("Failed to create sale.");
    }
  };

  return (
    <div className="bg-white min-h-screen px-4 py-10 text-black font-inter flex items-start justify-center">
      <div className="w-full max-w-xl">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 space-y-6 min-h-[90vh] flex flex-col justify-between">
          <div
            className="text-sm text-gray-600 flex items-center gap-2 cursor-pointer hover:text-black transition duration-150"
            onClick={() => navigate("/home")}
          >
            <FaArrowLeft className="text-xs" />
            Back to Dashboard
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Create Sale</h1>
            <p className="text-sm text-gray-500">
              Fill in the details to create a new sale for your shop
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="space-y-5 flex-1"
          >
            <div className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Sale Title *"
                value={formData.title}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />

              <input
                type="number"
                name="discount"
                placeholder="Discount % *"
                min="1"
                max="100"
                value={formData.discount}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />

              <textarea
                name="description"
                placeholder="Sale Description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="generateCoupon"
                  checked={formData.generateCoupon}
                  onChange={handleChange}
                  className="form-checkbox text-black"
                />
                <span className="text-sm text-gray-800">
                  Automatically generate coupon for this sale
                </span>
              </label>

              {formData.generateCoupon && (
                <div className="space-y-3 border border-gray-300 rounded-lg p-4 bg-gray-50">
                  <input
                    type="number"
                    name="couponDiscount"
                    placeholder="Extra Coupon Discount %"
                    min="1"
                    max="100"
                    value={formData.couponDiscount}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  />
                  <input
                    type="date"
                    name="couponExpiry"
                    value={formData.couponExpiry}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
              </div>
            </div>

            {/* Sale Poster Image Upload */}
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center bg-white">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="mx-auto h-32 object-contain rounded-md mb-2"
                />
              ) : (
                <div className="text-3xl text-gray-400 mb-2">⬆️</div>
              )}
              <p className="text-sm text-gray-800 font-medium">Sale Poster Image</p>
              <p className="text-xs text-gray-500 mb-1">PNG, JPG up to 5MB</p>
              <label className="inline-block mt-2 text-white bg-black px-4 py-2 rounded-lg cursor-pointer">
                Choose File
                <input
                  type="file"
                  name="saleImage"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* Product Gallery Images (Up to 7) */}
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 bg-white">
              <p className="text-sm font-semibold text-gray-800 mb-2">Product Images</p>
              <p className="text-xs text-gray-500 mb-4">
                Upload up to 7 product showcase images (JPG, PNG)
              </p>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-4">
                {galleryPreviews.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Product Preview ${idx + 1}`}
                    className="w-full h-24 object-cover rounded-lg border border-gray-200"
                  />
                ))}
              </div>

              <label className="inline-block text-white bg-black px-4 py-2 rounded-lg cursor-pointer">
                Upload Images
                <input
                  type="file"
                  name="productImages"
                  accept="image/*"
                  multiple
                  onChange={handleProductImagesChange}
                  className="hidden"
                />
              </label>

              {productImages.length > 7 && (
                <p className="text-red-500 text-xs mt-2">
                  You can only upload up to 7 product images.
                </p>
              )}
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700"
                onClick={() => navigate("/home")}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-900"
              >
                Create Sale
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
