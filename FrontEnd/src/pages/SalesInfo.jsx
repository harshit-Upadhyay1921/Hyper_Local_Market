// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const SalesInfo = () => {
//   const { id } = useParams(); // get saleId from URL
//   const [sale, setSale] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchSale = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/api/v1/sales/${id}`);
//         setSale(response.data.data); // assuming `data` is under `data` field
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to load sale info.",err);
//         setLoading(false);
//       }
//     };

//     fetchSale();
//   }, [id]);

//   if (loading) return <div className="p-6 text-center text-gray-500">Loading sale info...</div>;
//   if (error) return <div className="p-6 text-center text-red-500">{error}</div>;

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-md mt-6">
//       <h1 className="text-2xl font-bold mb-2 text-gray-800">{sale.title}</h1>
//       <img
//         src={sale.image}
//         alt="Sale"
//         className="w-full max-h-96 object-cover rounded-md mb-4"
//       />
//       <p className="text-gray-700 mb-2">{sale.description}</p>
      
//       <div className="flex flex-wrap gap-6 text-gray-600 text-sm mb-4">
//         <p><strong>Discount:</strong> {sale.discount}%</p>
//         <p><strong>Views:</strong> {sale.views}</p>
//         <p><strong>Start Date:</strong> {new Date(sale.startDate).toLocaleDateString()}</p>
//         <p><strong>End Date:</strong> {new Date(sale.endDate).toLocaleDateString()}</p>
//       </div>

//       {sale.shop && (
//         <div className="border-t pt-4 mt-4">
//           <h2 className="text-xl font-semibold text-gray-800 mb-1">Shop Info</h2>
//           <p><strong>Name:</strong> {sale.shop.shopName}</p>
//           <p><strong>Category:</strong> {sale.shop.category}</p>
//           <p><strong>Address:</strong> {sale.shop.address}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SalesInfo;

// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function SaleDetails() {
//   const { id } = useParams();
//   const [sale, setSale] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchSale = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/api/v1/sales/${id}`);
//         setSale(response.data.data);
//       } catch (err) {
//         // ❌ WRONG: setError("Error: ", err)
//         setError("Failed to fetch sale data."); // ✅ fix
//         console.error(err); // optional: log actual error
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSale();
//   }, [id]);

//   if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;
//   if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center bg-no-repeat backdrop-blur-md flex items-center justify-center px-4 py-10"
//       style={{ backgroundImage: `url(${sale.image})` }}
//     >
//       <div className="bg-white bg-opacity-90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl max-w-md w-full">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">{sale.title}</h1>
//         <img src={sale.image} alt={sale.title} className="rounded-xl mb-6 w-full" />

//         <div className="mb-4">
//           {/* ❌ shop?.name should be shop?.shopName, and location is undefined unless added in schema */}
//           <p className="text-md font-semibold text-gray-800">
//             Shop: <span className="font-normal">{sale.shop?.shopName || "Unknown"} ({sale.shop?.category || "Uncategorized"})</span>
//           </p>
//         </div>

//         <div className="mb-4">
//           <p className="text-sm text-gray-700">Start Date: {new Date(sale.startDate).toLocaleDateString()}</p>
//           <p className="text-sm text-gray-700">End Date: {new Date(sale.endDate).toLocaleDateString()}</p>
//         </div>

//         <p className="text-gray-700 mb-4">{sale.description || 'No description available.'}</p>

//         <div className="text-center text-lg text-green-700 font-semibold mb-4">
//           {sale.discount}% OFF
//         </div>

//         <p className="text-sm text-gray-600">Views: {sale.views}</p>
//       </div>
//     </div>
//   );
// }

// export default SaleDetails;

// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function SaleDetails() {
//   const { id } = useParams(); // saleId
//   const [sale, setSale] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const [coupon, setCoupon] = useState(null); // ⬅️ user's coupon
//   const [generating, setGenerating] = useState(false);

//   // Fetch sale details
//   useEffect(() => {
//     const fetchSale = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/api/v1/sales/${id}`);
//         setSale(response.data.data);
//       } catch (err) {
//         setError("Failed to fetch sale data.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSale();
//   }, [id]);

//   // Coupon Generation Handler
//   async function handleGenerateCoupon() {
//     if (!sale) return;

//     setGenerating(true);
//     try {
//       const res = await axios.post(
//         "http://localhost:8000/api/v1/coupon/generate",
//         {
//           shopId: sale.shop?._id,
//           saleId: sale._id,
//         },
//         {
//           withCredentials: true,
//         }
//       );

//       setCoupon({
//         code: res.data.code,
//         qrImage: res.data.qrImage,
//         couponMessage: res.data.couponMessage || "",
//       });

//       alert("✅ Coupon generated successfully!");
//     } catch (err) {
//       if (err.response?.status === 400) {
//         alert(err.response.data.message || "Coupon already generated.");
//       } else {
//         console.error(err);
//         alert("Failed to generate coupon.");
//       }
//     } finally {
//       setGenerating(false);
//     }
//   }

//   if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;
//   if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center bg-no-repeat backdrop-blur-md flex items-center justify-center px-4 py-10"
//       style={{ backgroundImage: `url(${sale.image})` }}
//     >
//       <div className="bg-white bg-opacity-90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl max-w-md w-full">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//           {sale.title}
//         </h1>

//         <img src={sale.image} alt={sale.title} className="rounded-xl mb-6 w-full" />

//         <div className="mb-4">
//           <p className="text-md font-semibold text-gray-800">
//             Shop:{" "}
//             <span className="font-normal">
//               {sale.shop?.shopName || "Unknown"} ({sale.shop?.category || "Uncategorized"})
//             </span>
//           </p>
//         </div>

//         <div className="mb-4">
//           <p className="text-sm text-gray-700">
//             Start Date: {new Date(sale.startDate).toLocaleDateString()}
//           </p>
//           <p className="text-sm text-gray-700">
//             End Date: {new Date(sale.endDate).toLocaleDateString()}
//           </p>
//         </div>

//         <p className="text-gray-700 mb-4">
//           {sale.description || "No description available."}
//         </p>

//         <div className="text-center text-lg text-green-700 font-semibold mb-4">
//           {sale.discount}% OFF
//         </div>

//         <p className="text-sm text-gray-600 mb-4">Views: {sale.views}</p>

//         {/* ✅ Coupon Section - Only if sale has generateCoupon: true */}
//         {sale.generateCoupon ? (
//           <div className="mt-8 text-center">
//             {coupon ? (
//               <>
//                 <h2 className="text-lg font-semibold text-gray-800 mb-2">Your Coupon</h2>
//                 <img
//                   src={coupon.qrImage}
//                   alt="Coupon QR"
//                   className="w-40 h-40 mx-auto border border-gray-300 rounded-lg"
//                 />
//                 <p className="text-sm text-gray-600 mt-2">
//                   Scan at shop and show this code:
//                 </p>
//                 <p className="text-md font-semibold text-black mt-1">{coupon.code}</p>
//                 {coupon.couponMessage && (
//                   <p className="text-sm text-gray-500 mt-2">{coupon.couponMessage}</p>
//                 )}
//               </>
//             ) : (
//               <button
//                 onClick={handleGenerateCoupon}
//                 className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition duration-200"
//                 disabled={generating}
//               >
//                 {generating ? "Generating..." : "Generate Your Coupon"}
//               </button>
//             )}
//           </div>
//         ) : (
//           <div className="mt-8 text-center text-sm text-gray-600 italic">
//             ⚠️ No coupon is available for this sale.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SaleDetails;

//---------------------------------------


// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// // Collage Component for Airbnb-style arrangement
// function AirbnbCollage({ images, onImageClick }) {
//   if (!images?.length) return null;

//   // 1 image
//   if (images.length === 1)
//     return (
//       <img
//         src={images[0]}
//         alt="Product 1"
//         onClick={() => onImageClick(images[0])}
//         className="w-full h-64 object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
//       />
//     );

//   // 2 images
//   if (images.length === 2)
//     return (
//       <div className="grid grid-cols-2 gap-2 h-64">
//         {images.map((img, idx) => (
//           <img
//             key={idx}
//             src={img}
//             alt={`Product ${idx + 1}`}
//             onClick={() => onImageClick(img)}
//             className="w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
//           />
//         ))}
//       </div>
//     );

//   // 3 images
//   if (images.length === 3)
//     return (
//       <div className="grid grid-cols-2 grid-rows-2 gap-2 h-64">
//         <img
//           src={images[0]}
//           alt="Product 1"
//           onClick={() => onImageClick(images[0])}
//           className="col-span-2 row-span-2 w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
//         />
//         <img
//           src={images[1]}
//           alt="Product 2"
//           onClick={() => onImageClick(images[1])}
//           className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
//         />
//         <img
//           src={images[2]}
//           alt="Product 3"
//           onClick={() => onImageClick(images[2])}
//           className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
//         />
//       </div>
//     );

//   // 4 or 5 images - classic Airbnb collage (5-tile)
//   return (
//     <div className="grid grid-cols-4 grid-rows-2 gap-2 h-72">
//       <img
//         src={images[0]}
//         alt="Product 1"
//         onClick={() => onImageClick(images[0])}
//         className="col-span-2 row-span-2 w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
//       />
//       {images[1] && (
//         <img
//           src={images[1]}
//           alt="Product 2"
//           onClick={() => onImageClick(images[1])}
//           className="col-span-2 row-span-1 w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
//         />
//       )}
//       {images[2] && (
//         <img
//           src={images[2]}
//           alt="Product 3"
//           onClick={() => onImageClick(images[2])}
//           className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
//         />
//       )}
//       {images[3] && (
//         <img
//           src={images[3]}
//           alt="Product 4"
//           onClick={() => onImageClick(images[3])}
//           className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
//         />
//       )}
//       {images[4] && (
//         <img
//           src={images[4]}
//           alt="Product 5"
//           onClick={() => onImageClick(images[4])}
//           className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
//         />
//       )}
//     </div>
//   );
// }

// function SaleDetails() {
//   const { id } = useParams();
//   const [sale, setSale] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [zoomImage, setZoomImage] = useState(null);

//   useEffect(() => {
//     const fetchSale = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/api/v1/sales/${id}`);
//         setSale(response.data.data);
//       } catch (err) {
//         setError("Failed to fetch sale data.:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSale();
//   }, [id]);

//   if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;
//   if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
//       style={{
//         backgroundImage: `url(${sale.image})`,
//         backgroundRepeat: "no-repeat",
//         backdropFilter: "blur(8px)",
//       }}
//     >
//       <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-2xl max-w-xl w-full">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
//           {sale.title}
//         </h1>

//         {/* Airbnb-style Product Image Collage */}
//         {sale.productImages?.length > 0 && (
//           <div className="mb-6">
//             <AirbnbCollage
//               images={sale.productImages.slice(0, 5)}
//               onImageClick={setZoomImage}
//             />
//           </div>
//         )}

//         {/* Image Zoom Modal */}
//         {zoomImage && (
//           <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//             <div className="relative max-w-4xl w-full px-4">
//               <button
//                 className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-red-500 hover:text-white transition"
//                 onClick={() => setZoomImage(null)}
//               >
//                 ✕
//               </button>
//               <img
//                 src={zoomImage}
//                 alt="Zoom"
//                 className="max-h-[90vh] w-full object-contain rounded-xl transition-all duration-300"
//               />
//             </div>
//           </div>
//         )}

//         {/* Shop Info */}
//         <div className="mb-2">
//           <p className="text-md font-semibold text-gray-800">
//             Shop:{" "}
//             <span className="font-normal">
//               {sale.shop?.shopName || "Unknown"} ({sale.shop?.category || "Uncategorized"})
//             </span>
//           </p>
//         </div>

//         {/* Dates */}
//         <div className="mb-2 text-sm text-gray-700">
//           <p>Start: {new Date(sale.startDate).toLocaleDateString()}</p>
//           <p>End: {new Date(sale.endDate).toLocaleDateString()}</p>
//         </div>

//         <p className="text-gray-700 mb-3">{sale.description}</p>

//         <p className="text-green-700 font-bold text-center text-lg mb-2">
//           {sale.discount}% OFF
//         </p>

//         <p className="text-sm text-gray-600 mb-2">Views: {sale.views}</p>
//       </div>
//     </div>
//   );
// }

// export default SaleDetails;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// // Adaptive Airbnb-style collage component for 1-7+ images
// function AirbnbCollage({ images, onImageClick }) {
//   if (!images?.length) return null;

//   if (images.length === 1)
//     return (
//       <img
//         src={images[0]}
//         alt="Product 1"
//         onClick={() => onImageClick(images[0])}
//         className="w-full h-96 object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
//       />
//     );

//   if (images.length === 2)
//     return (
//       <div className="grid grid-cols-2 gap-2 h-96">
//         {images.map((img, idx) => (
//           <img
//             key={idx}
//             src={img}
//             alt={`Product ${idx + 1}`}
//             onClick={() => onImageClick(img)}
//             className="w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
//           />
//         ))}
//       </div>
//     );

//   if (images.length === 3)
//     return (
//       <div className="grid grid-cols-2 grid-rows-2 gap-2 h-96">
//         <img
//           src={images[0]}
//           alt="Product 1"
//           onClick={() => onImageClick(images[0])}
//           className="col-span-2 row-span-2 w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
//         />
//         <img
//           src={images[1]}
//           alt="Product 2"
//           onClick={() => onImageClick(images[1])}
//           className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
//         />
//         <img
//           src={images[2]}
//           alt="Product 3"
//           onClick={() => onImageClick(images[2])}
//           className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
//         />
//       </div>
//     );

//   if (images.length <= 5)
//     return (
//       <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[26rem]">
//         <img
//           src={images[0]}
//           alt="Product 1"
//           onClick={() => onImageClick(images[0])}
//           className="col-span-2 row-span-2 w-full h-full object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
//         />
//         <img
//           src={images[1]}
//           alt="Product 2"
//           onClick={() => onImageClick(images[1])}
//           className="col-span-2 row-span-1 object-cover w-full h-full rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
//         />
//         <img
//           src={images[2]}
//           alt="Product 3"
//           onClick={() => onImageClick(images[2])}
//           className="col-span-1 row-span-1 object-cover w-full h-full rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
//         />
//         {images[3] && (
//           <img
//             src={images[3]}
//             alt="Product 4"
//             onClick={() => onImageClick(images[3])}
//             className="col-span-1 row-span-1 object-cover w-full h-full rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
//           />
//         )}
//         {images[4] && (
//           <img
//             src={images[4]}
//             alt="Product 5"
//             onClick={() => onImageClick(images[4])}
//             className="col-span-1 row-span-1 object-cover w-full h-full rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
//           />
//         )}
//       </div>
//     );

//   // 6 or more images
//   return (
//     <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[32rem]">
//       {images.slice(0, 6).map((img, idx) => (
//         <img
//           key={idx}
//           src={img}
//           alt={`Product ${idx + 1}`}
//           onClick={() => onImageClick(img)}
//           className="object-cover w-full h-full rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
//         />
//       ))}
//       {images.length > 6 && (
//         <div className="relative">
//           <img
//             src={images[6]}
//             alt="More"
//             onClick={() => onImageClick(images[6])}
//             className="object-cover w-full h-full rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-black/50 text-white flex items-center justify-center text-3xl font-bold rounded-lg">
//             +{images.length - 6} more
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function SaleDetails() {
//   const { id } = useParams();
//   const [sale, setSale] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [zoomImage, setZoomImage] = useState(null);

//   // Coupon state
//   const [coupon, setCoupon] = useState(null);
//   const [generating, setGenerating] = useState(false);

//   useEffect(() => {
//     const fetchSale = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/api/v1/sales/${id}`);
//         setSale(response.data.data);
//       } catch (err) {
//         setError("Failed to fetch sale data.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSale();
//   }, [id]);

//   async function handleGenerateCoupon() {
//     if (!sale) return;

//     setGenerating(true);
//     try {
//       const res = await axios.post(
//         "http://localhost:8000/api/v1/coupon/generate",
//         {
//           shopId: sale.shop?._id,
//           saleId: sale._id,
//         },
//         {
//           withCredentials: true,
//         }
//       );

//       setCoupon({
//         code: res.data.code,
//         qrImage: res.data.qrImage,
//         couponMessage: res.data.couponMessage || "",
//       });

//       alert("✅ Coupon generated successfully!");
//     } catch (err) {
//       if (err.response?.status === 400) {
//         alert(err.response.data.message || "Coupon already generated.");
//       } else {
//         alert("Failed to generate coupon.");
//         console.error(err);
//       }
//     } finally {
//       setGenerating(false);
//     }
//   }

//   if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;
//   if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
//       style={{
//         backgroundImage: `url(${sale.image})`,
//         backgroundRepeat: "no-repeat",
//         backdropFilter: "blur(8px)",
//       }}
//     >
//       <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-2xl max-w-2xl w-full">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
//           {sale.title}
//         </h1>

//         {/* Collage */}
//         {sale.productImages?.length > 0 && (
//           <div className="mb-6">
//             <AirbnbCollage images={sale.productImages} onImageClick={setZoomImage} />
//           </div>
//         )}

//         {/* Zoom Modal */}
//         {zoomImage && (
//           <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//             <div className="relative max-w-4xl w-full px-4">
//               <button
//                 className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-red-500 hover:text-white transition"
//                 onClick={() => setZoomImage(null)}
//               >
//                 ✕
//               </button>
//               <img
//                 src={zoomImage}
//                 alt="Zoom"
//                 className="max-h-[90vh] w-full object-contain rounded-xl transition-all duration-300"
//               />
//             </div>
//           </div>
//         )}

//         {/* Sale Info */}
//         <div className="mb-2">
//           <p className="text-md font-semibold text-gray-800">
//             Shop:{" "}
//             <span className="font-normal">
//               {sale.shop?.shopName || "Unknown"} ({sale.shop?.category || "Uncategorized"})
//             </span>
//           </p>
//         </div>

//         <div className="mb-2 text-sm text-gray-700">
//           <p>Start: {new Date(sale.startDate).toLocaleDateString()}</p>
//           <p>End: {new Date(sale.endDate).toLocaleDateString()}</p>
//         </div>

//         <p className="text-gray-700 mb-3">{sale.description || "No description."}</p>

//         <p className="text-green-700 font-bold text-center text-lg mb-2">{sale.discount}% OFF</p>

//         <p className="text-sm text-gray-600 mb-2">Views: {sale.views}</p>

//         {/* Coupon Section */}
//         {sale.generateCoupon ? (
//           <div className="mt-8 text-center">
//             {coupon ? (
//               <>
//                 <h2 className="text-lg font-semibold text-gray-800 mb-2">Your Coupon</h2>
//                 <img
//                   src={coupon.qrImage}
//                   alt="QR Code"
//                   className="w-40 h-40 mx-auto border border-gray-300 rounded-lg"
//                 />
//                 <p className="text-sm text-gray-600 mt-2">Scan at shop and show this code:</p>
//                 <p className="text-md font-semibold text-black mt-1">{coupon.code}</p>
//                 {coupon.couponMessage && (
//                   <p className="text-sm text-gray-500 mt-2">{coupon.couponMessage}</p>
//                 )}
//               </>
//             ) : (
//               <button
//                 onClick={handleGenerateCoupon}
//                 className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition duration-200"
//                 disabled={generating}
//               >
//                 {generating ? "Generating..." : "Generate Your Coupon"}
//               </button>
//             )}
//           </div>
//         ) : (
//           <div className="mt-6 text-center text-sm text-gray-600 italic">
//             ⚠ No coupon is available for this sale.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SaleDetails;

// SaleDetails.jsx

import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaMapMarkerAlt,
  FaBell,
  FaShoppingCart,
  FaUserCircle,
  FaArrowLeft
} from "react-icons/fa";

// Navbar with LocalLink branding
const Navbar = () => (
  <nav className="w-full bg-white shadow border-b z-20">
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
  </nav>
);

// Adaptive collage (cleaned logic for 1–7+ images)
function AirbnbCollage({ images, onImageClick }) {
  if (!images?.length) return null;

  switch (images.length) {
    case 1:
      return (
        <img
          src={images[0]}
          alt="Product 1"
          onClick={() => onImageClick(images[0])}
          className="w-full h-96 object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
        />
      );
    case 2:
      return (
        <div className="grid grid-cols-2 gap-2 h-96">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Product ${idx + 1}`}
              onClick={() => onImageClick(img)}
              className="w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
            />
          ))}
        </div>
      );
    case 3:
      return (
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-96">
          <img
            src={images[0]}
            alt="Product 1"
            onClick={() => onImageClick(images[0])}
            className="col-span-2 row-span-2 w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
          />
          <img
            src={images[1]}
            alt="Product 2"
            onClick={() => onImageClick(images[1])}
            className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
          />
          <img
            src={images[2]}
            alt="Product 3"
            onClick={() => onImageClick(images[2])}
            className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
          />
        </div>
      );
    case 4:
    case 5:
      return (
        <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[26rem]">
          <img
            src={images[0]}
            alt="Product 1"
            onClick={() => onImageClick(images[0])}
            className="col-span-2 row-span-2 w-full h-full object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
          />
          <img
            src={images[1]}
            alt="Product 2"
            onClick={() => onImageClick(images[1])}
            className="col-span-2 row-span-1 object-cover w-full h-full rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
          />
          {images.slice(2, 5).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Product ${idx + 3}`}
              onClick={() => onImageClick(img)}
              className="col-span-1 row-span-1 object-cover w-full h-full rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          ))}
        </div>
      );
    default:
      // 6 or more images
      return (
        <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[32rem]">
          {images.slice(0, 6).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Product ${idx + 1}`}
              onClick={() => onImageClick(img)}
              className="object-cover w-full h-full rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
            />
          ))}
          {images.length > 6 && (
            <div className="relative">
              <img
                src={images[6]}
                alt="More"
                onClick={() => onImageClick(images[6])}
                className="object-cover w-full h-full rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 text-white flex items-center justify-center text-3xl font-bold rounded-lg">
                +{images.length - 6} more
              </div>
            </div>
          )}
        </div>
      );
  }
}

// Main SaleDetails Node
function SaleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sale, setSale] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [zoomImage, setZoomImage] = useState(null);

  const [coupon, setCoupon] = useState(null);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    const fetchSale = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/sales/${id}`);
        setSale(response.data.data);
      } catch (err) {
        setError("Failed to fetch sale data.");
      } finally {
        setLoading(false);
      }
    };
    fetchSale();
  }, [id]);

  async function handleGenerateCoupon() {
    if (!sale) return;
    setGenerating(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/coupon/generate",
        {
          shopId: sale.shop?._id,
          saleId: sale._id,
        },
        {
          withCredentials: true,
        }
      );
      setCoupon({
        code: res.data.code,
        qrImage: res.data.qrImage,
        couponMessage: res.data.couponMessage || "",
      });
      alert("✅ Coupon generated successfully!");
    } catch (err) {
      if (err.response?.status === 400) {
        alert(err.response.data.message || "Coupon already generated.");
      } else {
        alert("Failed to generate coupon.");
        console.error(err);
      }
    } finally {
      setGenerating(false);
    }
  }

  if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* BLURRED FULLSCREEN BACKGROUND */}
      <div
        className="fixed inset-0 w-screen h-screen bg-black/60 -z-10"
        style={{
          backgroundImage: `url(${sale.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(18px)", // Strong blur
        }}
        aria-hidden="true"
      />

      {/* NAVBAR */}
      <Navbar />

      {/* BACK BUTTON - SEPARATE AND JUST BELOW LOCALINK */}
      <div className="px-8 mt-2">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 bg-white border border-gray-200 rounded-md py-1 px-3 shadow-sm hover:text-black transition-colors text-base focus:outline-none"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>
      </div>

      {/* MAIN SALE CARD SECTION */}
      <div className="flex-1 flex items-center justify-center px-4 py-10 w-full">
        <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-2xl max-w-2xl w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            {sale.title}
          </h1>

          {/* Collage */}
          {sale.productImages?.length > 0 && (
            <div className="mb-6">
              <AirbnbCollage images={sale.productImages} onImageClick={setZoomImage} />
            </div>
          )}

          {/* Zoom Modal */}
          {zoomImage && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
              <div className="relative max-w-4xl w-full px-4">
                <button
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-red-500 hover:text-white transition"
                  onClick={() => setZoomImage(null)}
                >
                  ✕
                </button>
                <img
                  src={zoomImage}
                  alt="Zoom"
                  className="max-h-[90vh] w-full object-contain rounded-xl transition-all duration-300"
                />
              </div>
            </div>
          )}

          {/* Sale Info */}
          <div className="mb-2">
            <p className="text-md font-semibold text-gray-800">
              Shop:{" "}
              <span className="font-normal">
                {sale.shop?.shopName || "Unknown"} ({sale.shop?.category || "Uncategorized"})
              </span>
            </p>
          </div>
          <div className="mb-2 text-sm text-gray-700">
            <p>Start: {new Date(sale.startDate).toLocaleDateString()}</p>
            <p>End: {new Date(sale.endDate).toLocaleDateString()}</p>
          </div>
          <p className="text-gray-700 mb-3">{sale.description || "No description."}</p>
          <p className="text-green-700 font-bold text-center text-lg mb-2">{sale.discount}% OFF</p>
          <p className="text-sm text-gray-600 mb-2">Views: {sale.views}</p>

          {/* Coupon Section */}
          {sale.generateCoupon ? (
            <div className="mt-8 text-center">
              {coupon ? (
                <>
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">Your Coupon</h2>
                  <img
                    src={coupon.qrImage}
                    alt="QR Code"
                    className="w-40 h-40 mx-auto border border-gray-300 rounded-lg"
                  />
                  <p className="text-sm text-gray-600 mt-2">Scan at shop and show this code:</p>
                  <p className="text-md font-semibold text-black mt-1">{coupon.code}</p>
                  {coupon.couponMessage && (
                    <p className="text-sm text-gray-500 mt-2">{coupon.couponMessage}</p>
                  )}
                </>
              ) : (
                <button
                  onClick={handleGenerateCoupon}
                  className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition duration-200"
                  disabled={generating}
                >
                  {generating ? "Generating..." : "Generate Your Coupon"}
                </button>
              )}
            </div>
          ) : (
            <div className="mt-6 text-center text-sm text-gray-600 italic">
              ⚠ No coupon is available for this sale.
            </div>
          )}
        </div>
      </div>
      <footer className="bg-white text-center text-sm text-gray-500 py-4 border-t w-full">
        © 2025 LocalLink. All rights reserved.
      </footer>
    </div>
  );
}

export default SaleDetails;

