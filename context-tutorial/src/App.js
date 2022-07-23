import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
//import ColorContext from "./contexts/color";
import { ColorProvider } from "./contexts/color";

const App = () => {
  return (
    // <ColorContext.Provider value={{ color: "red" }}>
    // /* value를 지정하지 않으면 오류가 남. */
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
    // </ColorContext.Provider>

    // <div>
    //   <ColorBox />
    // </div>
  );
};

export default App;
