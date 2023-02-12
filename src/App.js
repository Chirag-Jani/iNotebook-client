import "./App.css";
import Navbar from "./components/Main/Navbar";
import Home from "./components/Main/Home";
import About from "./components/Main/About";
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
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
