import { ClerkProvider } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Manage from "./pages/Manage";
import Processing from "./pages/Processing";
import Home from "./pages/Home";

const clerkPubKey =
   "pk_test_YWNjdXJhdGUtY295b3RlLTkyLmNsZXJrLmFjY291bnRzLmRldiQ";

function App() {
   return (
      <>
         <ClerkProvider publishableKey={clerkPubKey}>
            <Routes>
               <Route path="/" element={<Landing />} />
               <Route path="/processing" element={<Processing />} />
               <Route path="/manage" element={<Manage />} />
               <Route path="/chat" element={<Home />} />
            </Routes>
         </ClerkProvider>
      </>
   );
}

export default App;
