import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import FrontPage from "./pages/FrontPage";
import HomePage from "./pages/HomePage";
import CreateSale from "./pages/CreateSale"
import OwnerRegistrationPage from "./pages/OwnerRegistrationPage.jsx"
import CartPage from "./pages/CartPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import SwitchId from "./pages/SwitchId.jsx";
import ShopInfo from "./pages/ShopInfo.jsx";
import SalesInfo from "./pages/SalesInfo.jsx"
import ShopProfile from "./pages/ShopProfile.jsx"
import Joke from "./pages/Joke.jsx"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/front" element={<FrontPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/createsale" element={<CreateSale/>}/>
          <Route path="/owner" element={<OwnerRegistrationPage/>}/>
          <Route path="/user-cart" element={<CartPage/>}/>
          <Route path="/user-profile" element={<ProfilePage/>}/>
          <Route path="/user-switch" element={<SwitchId/>}/>
          <Route path="/shop-info/:id" element={<ShopInfo/>}/>
          <Route path="/sales-info/:id" element={<SalesInfo/>}/>
          <Route path="/shopprofile/:id" element={<ShopProfile/>}/>
          <Route path ="/joke" element={<Joke/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
