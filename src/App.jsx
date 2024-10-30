import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainVideo from "./pages/MainVideo/MainVideo";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainVideo />} />
        <Route path="/videos/:videoId" element={<MainVideo />} />
        <Route path="/upload" element={<VideoUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
