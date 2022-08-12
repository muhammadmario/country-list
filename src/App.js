import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Country from "./pages/Country";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryId" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
