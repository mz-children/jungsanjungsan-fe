import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import HomePage from "./pages/Home.page";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
