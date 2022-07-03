import { NavLink, Outlet } from "react-router-dom";

//Outlet 컴포넌트 - 중첩을 사용하기 위함 App.js안에 엘리먼트 안에 엘리먼트로 라우팅 할때 사용
//리액트라우터 NavLink와 내장 isActive 클래스 이름 사용하기

const Articles = () => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <div>
      <Outlet />
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/articles/1"
          >
            게시글 1
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/articles/2"
          >
            게시글 2
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/articles/3"
          >
            게시글 3
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
