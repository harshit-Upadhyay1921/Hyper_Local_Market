// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
// import { FaShoppingCart, FaMapMarkerAlt, FaUsers, FaStore } from "react-icons/fa";
// import loginImage from "../assets/LoginImage.jpeg"; // Your image
// import { useNavigate } from "react-router-dom";

// export default function LoginPage() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     latitude: "",
//     longitude: "",
//   });

//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setFormData((prev) => ({
//             ...prev,
//             latitude: position.coords.latitude.toFixed(6),
//             longitude: position.coords.longitude.toFixed(6),
//           }));
//         },
//         (err) => {
//           console.error("Location permission denied:", err);
//           setMessage("⚠️ Location is required for login.");
//         }
//       );
//     } else {
//       setMessage("⚠️ Geolocation is not supported by your browser.");
//     }
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.latitude || !formData.longitude) {
//       setMessage("❌ Please allow location access to proceed.");
//       return;
//     }
//     setLoading(true);
//     setMessage("");
//     try {
//       const res = await axios.post(
//         "http://localhost:8000/api/v1/auth/login",
//         formData,
//         { withCredentials: true }
//       );
//       setMessage("✅ Logged in successfully!");
//       navigate("/home")
//       console.log(res.data);
//     } catch (err) {
//       setMessage("❌ Login failed: " + (err.response?.data?.message || ""));
//     } finally {
//       setLoading(false);
//     }
//   };

//   const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

//   return (
//     <GoogleOAuthProvider clientId={clientId}>
//       <div className="flex h-screen">
//         {/* Left Side */}
//         <div className="w-[20%] bg-white px-4 pt-4 flex flex-col items-center border-r-2 border-gray-200">
//           <div className="flex items-center gap-2 mb-3">
//             <span className="text-xl">🌴</span>
//             <h1 className="text-2xl font-bold text-green-600">LocalLink</h1>
//           </div>
//           <p className="text-gray-600 mb-6">Log in to your account</p>
//           <GoogleLogin
//             onSuccess={async (credentialResponse) => {
//               try {
//                 const { credential } = credentialResponse;
//                 const res = await axios.post(
//                   "http://localhost:8000/api/v1/auth/google-login",
//                   {
//                     token: credential,
//                     latitude: formData.latitude,
//                     longitude: formData.longitude,
//                   },
//                   { withCredentials: true }
//                 );
//                 setMessage("✅ Google login successful");
//                 navigate("/home")
//                 console.log(res.data);
//               } catch (err) {
//                 console.error(err);
//                 setMessage("❌ Google login failed: " + (err.response?.data?.message || "Unknown error"));
//               }
//             }}
//             onError={() => {
//               setMessage("❌ Google login failed: Authorization error");
//             }}
//             theme="outline"
//             shape="pill"
//             width="240"
//           />

//           <p className="text-gray-500 text-sm mt-3 mb-2">or with email and password</p>
//           <form onSubmit={handleSubmit} className="w-full space-y-3">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full border text-black border-black px-3 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full border text-black border-black px-3 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition"
//             >
//               {loading ? "Logging In..." : "Login"}
//             </button>
//           </form>

//           {message && <p className="text-sm text-red-600 mt-2">{message}</p>}

//           <p className="text-sm text-gray-600 mt-4">
//             Don’t have an account? <Link to="/signup" className="text-green-600 font-medium">Sign up</Link>
//           </p>
//         </div>

//         {/* Right Side */}
//         <div className="w-[80%] bg-[#001e2b] relative flex items-center justify-center overflow-hidden">
//           {/* Left Cards */}
//           <div className="absolute left-7 top-20 flex flex-col gap-6">
//             <div className="w-90 h-70 p-4 rounded-xl bg-[#002b3b] text-white shadow-md">
//               <h3 className="text-3xl font-semibold">Empowering local stores near you</h3>
//               <FaStore className="mt-3 text-7xl" />
//             </div>
//             <div className="w-90 h-70 p-4 mt-30 rounded-xl bg-[#002b3b] text-white shadow-md">
//               <h3 className="text-3xl font-semibold">Seamless shopping experience</h3>
//               <FaShoppingCart className="mt-3 text-7xl" />
//             </div>
//           </div>

//           {/* Main Image */}
//           <img
//             src={loginImage}
//             alt="Shopping lady illustration"
//             className="h-[90%] max-w-[40%] object-contain z-10"
//           />

//           {/* Right Cards */}
//           <div className="absolute right-7 top-20 flex flex-col gap-6">
//             <div className="w-90 h-70 p-4 rounded-xl bg-[#002b3b] text-white shadow-md">
//               <h3 className="text-3xl font-semibold">Find stores in your location</h3>
//               <FaMapMarkerAlt className="mt-7 text-7xl" />
//             </div>
//             <div className="w-90 h-70 p-4 mt-30 rounded-xl bg-[#002b3b] text-white shadow-md">
//               <h3 className="text-3xl font-semibold">Connect with community buyers</h3>
//               <FaUsers className="mt-3 text-7xl" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </GoogleOAuthProvider>
//   );
// }

import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { FaShoppingCart, FaMapMarkerAlt, FaUsers, FaStore } from "react-icons/fa";
import loginImage from "../assets/LoginImage.jpeg";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    latitude: "",
    longitude: "",
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  // Use a separate state to indicate if location was fetched successfully
  const [locationReady, setLocationReady] = useState(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prev) => ({
            ...prev,
            latitude: position.coords.latitude.toFixed(6),
            longitude: position.coords.longitude.toFixed(6),
          }));
          setLocationReady(true);
          setMessage("");
        },
        (err) => {
          console.error("Location permission denied:", err);
          setMessage("⚠️ Location is required for login.");
          setLocationReady(false);
        }
      );
    } else {
      setMessage("⚠️ Geolocation is not supported by your browser.");
      setLocationReady(false);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.latitude || !formData.longitude) {
      setMessage("❌ Please allow location access to proceed.");
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        formData,
        { withCredentials: true }
      );
      setMessage("✅ Logged in successfully!");
      navigate("/home");
      console.log(res.data);
    } catch (err) {
      setMessage("❌ Login failed: " + (err.response?.data?.message || ""));
    } finally {
      setLoading(false);
    }
  };

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="flex h-screen">
        {/* Left Side */}
        <div className="w-[20%] bg-white px-4 pt-4 flex flex-col items-center border-r-2 border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🌴</span>
            <h1 className="text-2xl font-bold text-green-600">LocalLink</h1>
          </div>
          <p className="text-gray-600 mb-6">Log in to your account</p>

          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              try {
                const { credential } = credentialResponse;
                if (!locationReady) {
                  setMessage("❌ Location is required for Google login.");
                  return;
                }

                const res = await axios.post(
                  "http://localhost:8000/api/v1/auth/google-login",
                  {
                    token: credential,
                    latitude: formData.latitude,
                    longitude: formData.longitude,
                  },
                  { withCredentials: true }
                );

                setMessage("✅ Google login successful");
                navigate("/home");
                console.log(res.data);
              } catch (err) {
                console.error(err);
                const msg = err.response?.data?.message;

                if (msg === "NOT_REGISTERED") {
                  // Decode token to get email and name to prefill signup form
                  try {
                    const payload = jwtDecode(
                      err.config.data ? JSON.parse(err.config.data).token : ""
                    );
                    navigate("/signup", {
                      state: {
                        email: payload.email,
                        name: payload.name,
                      },
                    });
                    return;
                  } catch {
                    // If decoding fails, just redirect to signup without prefill
                    navigate("/signup");
                    return;
                  }
                }

                setMessage("❌ Google login failed: " + (msg || "Unknown error"));
              }
            }}
            onError={() => {
              setMessage("❌ Google login failed: Authorization error");
            }}
            theme="outline"
            shape="pill"
            width="240"
            disabled={!locationReady}
          />

          <p className="text-gray-500 text-sm mt-3 mb-2">or with email and password</p>
          <form onSubmit={handleSubmit} className="w-full space-y-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border text-black border-black px-3 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border text-black border-black px-3 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition"
            >
              {loading ? "Logging In..." : "Login"}
            </button>
          </form>

          {message && (
            <p
              className={`text-sm mt-2 ${
                message.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          <p className="text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-green-600 font-medium">
              Sign up
            </Link>
          </p>
        </div>

        {/* Right Side */}
        <div className="w-[80%] bg-[#001e2b] relative flex items-center justify-center overflow-hidden">
          {/* Left Cards */}
          <div className="absolute left-7 top-20 flex flex-col gap-6">
            <div className="w-90 h-70 p-4 rounded-xl bg-[#002b3b] text-white shadow-md">
              <h3 className="text-3xl font-semibold">Empowering local stores near you</h3>
              <FaStore className="mt-3 text-7xl" />
            </div>
            <div className="w-90 h-70 p-4 mt-30 rounded-xl bg-[#002b3b] text-white shadow-md">
              <h3 className="text-3xl font-semibold">Seamless shopping experience</h3>
              <FaShoppingCart className="mt-3 text-7xl" />
            </div>
          </div>

          {/* Main Image */}
          <img
            src={loginImage}
            alt="Shopping lady illustration"
            className="h-[90%] max-w-[40%] object-contain z-10"
          />

          {/* Right Cards */}
          <div className="absolute right-7 top-20 flex flex-col gap-6">
            <div className="w-90 h-70 p-4 rounded-xl bg-[#002b3b] text-white shadow-md">
              <h3 className="text-3xl font-semibold">Find stores in your location</h3>
              <FaMapMarkerAlt className="mt-7 text-7xl" />
            </div>
            <div className="w-90 h-70 p-4 mt-30 rounded-xl bg-[#002b3b] text-white shadow-md">
              <h3 className="text-3xl font-semibold">Connect with community buyers</h3>
              <FaUsers className="mt-3 text-7xl" />
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}


