import React, { useState } from 'react';
import axiox from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axiox.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=bbe9b029ef2b4d12b2d5d1316353d975');
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
};

export default App;

//bbe9b029ef2b4d12b2d5d1316353d975 new key
