import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import PageNotFound from "./Pages/PageNotFound";
import Upload from "./Pages/UploadPage/Upload";

import Profile from "./Pages/ProfilePage/Profile";
import SearchResult from "./Pages/HomePage/SearchResult";
import Gallery from "./Pages/GalleryPage/Gallery";


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
      
        <Route path="/profile" element={<Profile />} />
         <Route path="/gallery" element={<Gallery />} />
          <Route path="/video" element={<SearchResult />} />
         <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
