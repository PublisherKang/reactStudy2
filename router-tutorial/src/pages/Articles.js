import { Link, Outlet } from "react-router-dom";

//Outlet 컴포넌트 - 중첩을 사용하기 위함 App.js안에 엘리먼트 안에 엘리먼트로 라우팅 할때 사용

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <li>
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글 2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
