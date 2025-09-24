// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function SignUpPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//     agree: false,
//     longitude: "",
//     latitude: ""
//   });

//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setFormData((prev) => ({
//             ...prev,
//             longitude: position.coords.longitude.toFixed(6),
//             latitude: position.coords.latitude.toFixed(6),
//           }));
//         },
//         (err) => {
//           console.error("Location error:", err);
//           setMessage("⚠️ Unable to fetch your location automatically.");
//         }
//       );
//     } else {
//       setMessage("⚠️ Geolocation is not supported by your browser.");
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
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
//         "http://localhost:8000/api/v1/auth/register",
//         formData,
//         { withCredentials: true }
//       );
//       setMessage("✅ Signup in successfully!");
//       navigate("/home")
//       console.log(res.data);
//     } catch (err) {
//       setMessage("❌ Signup failed: " + (err.response?.data?.message || ""));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#00382A] py-8 px-4">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

//         <div className="flex items-center justify-center gap-2 mb-4">
//           <span className="text-green-700 text-2xl">🌴</span>
//           <h1 className="text-2xl font-bold text-green-800">LocalLink</h1>
//         </div>

//         <h2 className="text-center text-xl font-semibold mb-4 text-blue-800">-Sign up-</h2>

//         <button className="w-full py-2 border border-black text-black rounded-full mb-4 flex items-center justify-center gap-2 hover:bg-gray-50">
//           <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
//           <span>-Sign up with Google-</span>
//         </button>

//         <div className="text-sm text-center mb-4 text-gray-500">-or with email and password-</div>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border  border-black rounded-full text-black px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border border-black text-black rounded-full px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full border border-black text-black rounded-full px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
//             required
//           />

//           <select
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             className="w-full border-black border rounded-full text-black px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
//             required
//           >
//             <option value="">Select Role</option>
//             <option value="user">User</option>
//             <option value="owner">Shop Owner</option>
//           </select>

//           <div className="flex items-center mb-4">
//             <input
//               type="checkbox"
//               name="agree"
//               checked={formData.agree}
//               onChange={handleChange}
//               className="mr-2"
//               required
//             />
//             <label className="text-sm text-gray-600">
//               I agree to the <a href="#" className="text-green-600 underline">Terms of Service</a> and <a href="#" className="text-green-600 underline">Privacy Policy</a>
//             </label>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
//           >
//             {loading ? "Signing Up..." : "Create your LocalLink account"}
//           </button>
//         </form>

//         {message && (
//           <div className="mt-3 text-center text-sm text-red-500">{message}</div>
//         )}

//         <div className="mt-4 text-center text-sm text-gray-500">
//           Already have an account? <Link to="/login" className="text-green-600 underline">Click here to sign in →</Link>
//         </div>

//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    agree: false,
    longitude: "",
    latitude: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [locationReady, setLocationReady] = useState(false);

  // Prefill name/email if coming from Google login redirect (optional)
  useEffect(() => {
    if (location.state?.email || location.state?.name) {
      setFormData((prev) => ({
        ...prev,
        email: location.state.email || "",
        name: location.state.name || "",
      }));
    }
  }, [location.state]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prev) => ({
            ...prev,
            longitude: position.coords.longitude.toFixed(6),
            latitude: position.coords.latitude.toFixed(6),
          }));
          setLocationReady(true);
          setMessage("");
        },
        (err) => {
          console.error("Location error:", err);
          setMessage("⚠️ Unable to fetch your location automatically.");
          setLocationReady(false);
        }
      );
    } else {
      setMessage("⚠️ Geolocation is not supported by your browser.");
      setLocationReady(false);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
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
        "http://localhost:8000/api/v1/auth/register",
        formData,
        { withCredentials: true }
      );
      setMessage("✅ Signup successful!");
      navigate("/home");
      console.log(res.data);
    } catch (err) {
      setMessage("❌ Signup failed: " + (err.response?.data?.message || ""));
    } finally {
      setLoading(false);
    }
  };

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const handleGoogleRegister = async (credentialResponse) => {
    const { credential } = credentialResponse;
    if (!locationReady) {
      setMessage("❌ Location is required for Google sign up.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Call your backend Google register API
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/google-register",
        {
          token: credential,
          latitude: formData.latitude,
          longitude: formData.longitude,
        },
        { withCredentials: true }
      );

      setMessage("✅ Google sign up successful!");
      navigate("/home");
      console.log(res.data);
    } catch (err) {
      const msg = err.response?.data?.message || "Unknown error";

      if (msg === "ALREADY_REGISTERED") {
        setMessage("❌ Account already exists. Please log in instead.");
        navigate("/login");
        return;
      }
      setMessage("❌ Google sign up failed: " + msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="min-h-screen flex items-center justify-center bg-[#00382A] py-8 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-green-700 text-2xl">🌴</span>
            <h1 className="text-2xl font-bold text-green-800">LocalLink</h1>
          </div>

          <h2 className="text-center text-xl font-semibold mb-4 text-blue-800">
            -Sign up-
          </h2>

          {/* Google Login button centered */}
          <div className="flex justify-center mb-4">
            <GoogleLogin
              onSuccess={handleGoogleRegister}
              onError={() =>
                setMessage("❌ Google sign up failed: Authorization error")
              }
              theme="outline"
              shape="pill"
              width="240"
              disabled={!locationReady || loading}
            />
          </div>

          <div className="text-sm text-center mb-4 text-gray-500">
            -or with email and password-
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-black rounded-full text-black px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-black text-black rounded-full px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-black text-black rounded-full px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border-black border rounded-full text-black px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="owner">Shop Owner</option>
            </select>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mr-2"
                required
                disabled={loading}
              />
              <label className="text-sm text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-green-600 underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-green-600 underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              {loading ? "Signing Up..." : "Create your LocalLink account"}
            </button>
          </form>

          {message && (
            <div
              className={`mt-3 text-center text-sm ${
                message.startsWith("✅") ? "text-green-600" : "text-red-500"
              }`}
            >
              {message}
            </div>
          )}

          <div className="mt-4 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 underline">
              Click here to sign in →
            </Link>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
