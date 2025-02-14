import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignUp from "./pages/SignUp/SignUp";
import Layout from "./components/Layout/Layout";

const App = () => {

  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App
