import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Chat from "./containers/Chat";
import Landing from "./containers/Landing";

import Navbar from "./components/Navbar";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
