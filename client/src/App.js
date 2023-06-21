import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PayemtSuccess from "./components/PayemtSuccess";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paymentsuccess" element={<PayemtSuccess />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
