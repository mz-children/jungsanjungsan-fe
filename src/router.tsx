import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/Home.page";
import TestPage from "./pages/Test.page";
import DhTest from "./pages/Dh.test";
import TestPageTK from "./pages/TestTK.page";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/tk" element={<TestPageTK />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dh" element={<DhTest />} />
      </Routes>
    </BrowserRouter>
  );
}
