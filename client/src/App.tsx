import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Manage from "./pages/Manage";
import Processing from "./pages/Processing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/processing" element={<Processing />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </>
  );
}

export default App;
