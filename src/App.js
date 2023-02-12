import "./App.css";
import Navbar from "./components/Main/Navbar";
import Home from "./components/Main/Home";
import About from "./components/Main/About";
import Signup from "./components/Main/Signup";
import Login from "./components/Main/Login";
import NoteState from "./context/notes/NoteState";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./components/Utility/Alert";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
