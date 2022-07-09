import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }
  // isLoggedIn이 false라면 login페이지로 이동
  // 라우터를 통해 직접 url로 mypage로 이동하면 자동으로 login페이지로 이동해서 mypage로 이동할 수 없다.
  // true라면 mypage로 이동

  return <div>마이 페이지</div>;
};

export default MyPage;
