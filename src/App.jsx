import React from "react";

import Login from "./components/authentication/login.jsx";
import Register from "./components/authentication/register.jsx";
import Star from "./components/starRating/star";
import Slider from "./components/image-slide/slider";
import List from "./components/nested-list/list.jsx"
import Qr_code from "./components/qr-code/qr_code.jsx";
import Theme from "./components/local-storage-theme-toggle/theme.jsx";
import Scroll from "./components/scroll-indicator/scroll.jsx";
import SliderInterval from "./components/image-intervalSlide/image.jsx";

import about from './components/nested-list/data.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/star" element={<Star />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/sliderInterval" element={<SliderInterval/>}/>
        <Route path="/list" element={<List items={about} />} />
        <Route path="/qr-code" element={<Qr_code />} />
        <Route path="/local-storage" element={<Theme />} />
        <Route path="/scroll" element={<Scroll />} />
      </Routes>
    </Router>
  );
}

export default App;
