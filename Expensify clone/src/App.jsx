import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Homes from "./pages/Homes";
import Inbox from "./pages/Inbox";
import Spend from "./pages/Spend";
import Worksp from "./pages/Worksp";
import Spendexpen from "./pages/Spendexpen";
import Spendreport from "./pages/Spendreport";
import Accounts from "./pages/Account/Accounts";
import Accountprofile from "./pages/Account/pages/Accountprofile";
import Accountwallet from "./pages/Account/pages/Accountwallet";
import Accountrules from "./pages/Account/pages/Accountrules";
import Agents from "./pages/Account/pages/Agents";
import useToggle from "./components/useToggle";
function App() {

  const [dark, toggleDark] = useToggle(false);
  return (
    <>
      <Navbar dark={dark} useToggle={toggleDark} />
      <Routes>
        <Route path="/" element={<Home dark={dark} />} />
        <Route path="/homes" element={<Homes dark={dark} />} />
        <Route path="/inbox" element={<Inbox dark={dark} />} />
        <Route path="/spend" element={<Spend dark={dark} />}>
          <Route index element={<Spendexpen dark={dark} />} />
          <Route path="expense" element={<Spendexpen dark={dark} />} />
          <Route path="report" element={<Spendreport dark={dark} />} />
        </Route>
        <Route path="/worksp" element={<Worksp dark={dark} />} />
        <Route path="/accounts" element={<Accounts dark={dark} />}>
          <Route index element={<Accountprofile dark={dark} />} />
          <Route path="profile" element={<Accountprofile dark={dark} />} />
          <Route path="wallet" element={<Accountwallet dark={dark} />} />
          <Route path="rules" element={<Accountrules dark={dark} />} />
          <Route path="agents" element={<Agents dark={dark} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
