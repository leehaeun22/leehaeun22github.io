import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./Layout.css";

function Layout() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // 페이지 진입 시 애니메이션 실행
    setShow(true);

    // 페이지 변경 시 초기화
    return () => setShow(false);
  }, []);

  return (
    <>
      {/* Navbar는 항상 고정 */}
      <Navbar />

      {/* 페이지 콘텐츠 */}
      <main className={`page ${show ? "show" : ""}`}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
