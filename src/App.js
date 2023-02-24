import React from "react";
import { Route, Routes
 } from "react-router-dom";
import Home from "./routes/home";
import Navigation from "./routes/navigation";
import SignIn from "./routes/signIn";

const Shop = () => {
  return <h1>Im the shop part</h1>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
      </Route>
    </Routes>
  );
}

export default App;
