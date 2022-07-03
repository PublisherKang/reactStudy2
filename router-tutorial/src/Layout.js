import { Outlet, useNavigate } from "react-router-dom";

// useNavigate
//Link 컴포넌트를 사용하지 않고 다른페이지로 이동

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    //이전 페이지로 이동
    navigate(-1);
  };

  const goArticles = () => {
    // Articles경로로 이동
    navigate("/articles", { replace: true });
    //replace tru는 현재 페이지를 기록에 남기지 않음
  };

  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
