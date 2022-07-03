import { NavLink, Outlet } from "react-router-dom";

//Outlet 컴포넌트 - 중첩을 사용하기 위함 App.js안에 엘리먼트 안에 엘리먼트로 라우팅 할때 사용
//리액트라우터 NavLink와 내장 isActive 클래스 이름 사용하기

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
    </div>
  );
};

const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <li>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to={`article${id}`}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

export default Articles;
