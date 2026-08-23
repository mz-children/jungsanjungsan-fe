import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/Home.page";
import TestPage from "./pages/Test.page";
import TestPageTK from "./pages/TestTK.page";
import TestNRPage from "./pages/TestNR.page";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/tk" element={<TestPageTK />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/testnr" element={<TestNRPage />} />
      </Routes>
    </BrowserRouter>
  );
}
