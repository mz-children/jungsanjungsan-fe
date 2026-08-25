import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/Home.page";
import TestPage from "./pages/Test.page";
import Dhpage from "./pages/Dh.page";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dh" element={<Dhpage />} />
      </Routes>
    </BrowserRouter>
  );
}
