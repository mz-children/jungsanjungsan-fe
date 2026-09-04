import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/Home.page";
import TestPage from "./pages/Test.page";
import TestSWPage from "./pages/TestSW.page";
import RoomCreate from "./pages/RoomCreate.page";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/sw" element={<TestSWPage />} />
        {/* <Route path="/tk" element={<TestPageTK />} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/roomCreate" element={<RoomCreate />} />
      </Routes>
    </BrowserRouter>
  );
}
