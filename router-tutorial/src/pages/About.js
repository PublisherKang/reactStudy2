import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>쿼리스트링: {location.search}</p>
    </div>
  );
};

export default About;

//쿼리스트링
// pathname: 현재 주소의 경로(쿼리스트링 제외)
// search: 맨 앞의 ? 문자를 포함한 쿼리스트링 값
// hash: 주소의 # 문자열 뒤의 값 (주로 History API가 지원되지 않는 구형 브라우저에서 클라이언트 라우팅을 사용할 때 쓰는 해시 라우터에서 사용)
// state: 페이지로 이동할 때 임의로 넣을 수 있는 상태 값
// key: location 객체의 고유값, 초기에는 default이며, 페이지가 변경될 때마다 고유의 값이 생성됨
