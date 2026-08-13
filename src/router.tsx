import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/Home.page";
import TestPage from "./pages/Test.page";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
