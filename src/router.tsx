import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/Home.page";
import TestPage from "./pages/Test.page";
import TestSWPage from "./pages/TestSW.page";
import ReceitListPage from "./pages/RecietList.page";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="room">
          <Route path="create" />
          {/* <Route path="/create" /> */}
          {/* <Route path="/create" /> */}
          <Route path=":id">
            <Route path="receit-list" element={<ReceitListPage />} />
          </Route>
        </Route>
        <Route path="/sw" element={<TestSWPage />} />
        {/* <Route path="/tk" element={<TestPageTK />} /> */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
