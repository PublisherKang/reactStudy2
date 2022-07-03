import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {/* index는 path="/" 와 동일한 의미를 가짐 */}
        <Route path="/about" element={<About />} />
        <Route path="/Profile/:usename" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      {/* "*"는 wildcard 문자이다. 엘리먼트 상단에 위치하는 라우트의 규칙을 확인하고 일치하는 라우트가 없으면 이 라우트가 화면에 나타남 */}
      
    </Routes>
  );
};
export default App;
