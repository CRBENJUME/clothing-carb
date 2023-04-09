import React from "react";
import { Route, Routes
 } from "react-router-dom";
import Home from "./routes/home";
import Navigation from "./routes/navigation";
import Authentication from "./routes/authentication";
import Shop from "./routes/shop/shopIndex";
import CheckOut from "./routes/checkout/checkIndex";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="auth" element={<Authentication/>}/>
        <Route path="checkout" element={<CheckOut/>}/>
      </Route>
    </Routes>
  );
}

export default App;
