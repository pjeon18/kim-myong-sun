import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Exhibit from "./components/Exhibit";
import ClassicHome from "./components/ClassicHome";
import BackgroundPetals from "./components/BackgroundPetals";
import MouseTrailPetals from "./components/MouseTrailPetals";

function App() {
  return (
      <div className="relative min-h-screen overflow-hidden">
        <BackgroundPetals />      {/* <- GLOBAL background petals */}
        <MouseTrailPetals />      {/* <- mouse-follow petals */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exhibit" element={<Exhibit />} />
          <Route path="/classic" element={<ClassicHome />} />
        </Routes>
      </div>
  );
}


export default App;
