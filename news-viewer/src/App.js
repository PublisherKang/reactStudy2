import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

export default App;

// import { useState, useCallback } from 'react';
// import NewsList from './components/NewsList';
// import Categories from './components/Categories';

// const App = () => {
//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback((category) => setCategory(category), []);

//   console.log(category);

//   return (
//     <>
//       <Categories category={category} onSelect={onSelect} />
//       <NewsList category={category} />
//     </>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import axiox from 'axios';
// import NewsItem from './components/NewsItem';

// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = async () => {
//     try {
//       const response = await axiox.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=bbe9b029ef2b4d12b2d5d1316353d975');
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
//     </div>
//   );
// };

// export default App;

//bbe9b029ef2b4d12b2d5d1316353d975 new key
