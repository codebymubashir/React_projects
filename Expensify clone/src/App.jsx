import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Homes from "./pages/Homes";
import Inbox from "./pages/Inbox";
import Spend from "./pages/Spend";
import Worksp from "./pages/Worksp";
import Spendexpen from "./pages/Spendexpen";
import Spendreport from "./pages/Spendreport";
import Accounts from "./pages/Accounts";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homes" element={<Homes />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/spend" element={<Spend />} >
          <Route index element={<Spendexpen/>}/>  
          <Route path="expense" element={<Spendexpen/>}/>
          <Route path="report" element={<Spendreport/>}/>
        </Route>
        <Route path="/worksp" element={<Worksp />} />
        <Route path="/accounts" element={<Accounts />} />
      </Routes>
      
    </>
  );
}

export default App;
