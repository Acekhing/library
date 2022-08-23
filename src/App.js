//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/welcome/Welcome";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import NoPage from "./pages/nopage/NoPage";
import Upload from "./pages/upload/Upload";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="upload" element={<Upload />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
