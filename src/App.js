import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Newproj from "./NewProj";
import { BrowserRouter,Route,Routes} from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="newproj" element={<Newproj/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
