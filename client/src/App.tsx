import { ClerkProvider } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Manage from "./pages/Manage";
import Processing from "./pages/Processing";
import Home from "./pages/Home";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
   throw new Error("Missing Publishable Key");
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

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
