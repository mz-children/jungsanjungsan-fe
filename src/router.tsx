import { BrowserRouter, Route, Routes } from "react-router";

import HomePage from "./pages/Home.page";
import TestPage from "./pages/Test.page";
import TestES from "./pages/TestES.page";
import TestSWPage from "./pages/TestSW.page";
import RoomCreate from "./pages/RoomCreate.page";
import RoomConfirm from "./pages/RoomConfirm.page";
import TestPageTK from "./pages/TestTK.page";
import ComingSoonPage from "./pages/ComingSoon.page";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================실제 서비스 라우트===================== */}

        <Route path="/" element={<HomePage />} />

        <Route path="room">
          <Route path="create" element={<RoomCreate />} />
          <Route path="confirm" element={<RoomConfirm />} />
          <Route path="done" element={<ComingSoonPage />} />

          <Route path=":shareCode">
            <Route index element={<ComingSoonPage />} />

            <Route path="edit" element={<ComingSoonPage />} />
            <Route path="result" element={<ComingSoonPage />} />

            <Route path="receipt">
              <Route index element={<ComingSoonPage />} />
              <Route path="create" element={<ComingSoonPage />} />

              <Route path=":receiptId">
                <Route index element={<ComingSoonPage />} />
                <Route path="edit" element={<ComingSoonPage />} />
              </Route>
            </Route>
          </Route>
        </Route>

        {/* =================기존 테스트 라우트- 개발 완료 후 제거
        개발완료 되면 "실제 서비스 라우트" element 부분에 갈아끼운 후 마무리 바랍니다!
        ========================= */}

        <Route path="/test" element={<TestPage />} />
        <Route path="/sw" element={<TestSWPage />} />
        <Route path="/tk" element={<TestPageTK />} />
        <Route path="/es" element={<TestES />} />

        {/* 기존 URL 호환이 필요하면 임시 유지 */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
