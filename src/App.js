import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Books from "./components/Books";
import Footer from "./components/Footer";
import Exhibit from "./components/Exhibit"; // 👈 import the new Exhibit page

function App() {
  return (
    <Router>
      <div className="scroll-smooth dark:bg-black dark:text-white">
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <About />
                <Books />
                <Footer />
              </>
            }
          />

          {/* Exhibit Page */}
          <Route path="/exhibit" element={<Exhibit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
