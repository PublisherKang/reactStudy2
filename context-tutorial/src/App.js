import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

const App = () => {
  return (
    <ColorContext.Provider value={{ color: "red" }}>
      {/* value를 지정하지 않으면 오류가 남. */}
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>

    // <div>
    //   <ColorBox />
    // </div>
  );
};

export default App;
