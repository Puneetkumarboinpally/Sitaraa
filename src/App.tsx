import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="h-screen bg-[#004643]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
