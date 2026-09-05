import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/Home.page";
import TestPage from "./pages/Test.page";
<<<<<<< HEAD
import Dhpage from "./pages/Dh.page";
=======
import DhTest from "./pages/Dh.test";
import TestPageTK from "./pages/TestTK.page";
>>>>>>> 5f737e2a7b86a49f0ddb64695227a2cbdce3f8c2

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/tk" element={<TestPageTK />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dh" element={<Dhpage />} />
      </Routes>
    </BrowserRouter>
  );
}
