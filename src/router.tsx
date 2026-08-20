import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/Home.page";
import TestPage from "./pages/Test.page";
import DhTest from "./pages/Dh.test";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/DhTest" element={<DhTest />} />
      </Routes>
    </BrowserRouter>
  );
}
