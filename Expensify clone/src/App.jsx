import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Homes from "./pages/Homes";
import Inbox from "./pages/Inbox";
import Spend from "./pages/Spend";
import Worksp from "./pages/Worksp";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homes" element={<Homes />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/spend" element={<Spend />} />
        <Route path="/worksp" element={<Worksp />} />
      </Routes>
      
    </>
  );
}

export default App;
