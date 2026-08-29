import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/Home.page";
import TestPage from "./pages/Test.page";
<<<<<<< HEAD
import TestPageTK from "./pages/TestTK.page";
import TestES from "./pages/TestES.page";
=======
import TestSWPage from "./pages/TestSW.page";
>>>>>>> develop

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/sw" element={<TestSWPage />} />
        {/* <Route path="/tk" element={<TestPageTK />} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/es" element={<TestES />} />
      </Routes>
    </BrowserRouter>
  );
}
