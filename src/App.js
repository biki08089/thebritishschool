import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import { useState } from "react";
import MenuSlider from "./component/MenuSlider";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Student from "./pages/Student";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="relative">
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu ? (
        <MenuSlider showMenu={showMenu} setShowMenu={setShowMenu} />
      ) : (
        ""
      )}
      <Routes>
        <Route path="/" element={<Hero setShowMenu={setShowMenu} />} />
        <Route
          path="/register"
          element={<Register setShowMenu={setShowMenu} />}
        />
        <Route path="/register/admin" element={<Admin />} />
        <Route path="/register/student" element={<Student />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
