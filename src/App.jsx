import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Home />} />
        <Route path="/upload" element={<VideoUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
