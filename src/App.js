import LeftSide from "./components/LeftSide";
import Main from "./components/Main";
import RightSide from "./components/RightSide";
function App() {
  return (
    <div className="flex">
      {/* Left Side */}
      {/* <LeftSide /> */}
      <LeftSide />
      {/* Main */}
      <Main />
      {/* Right Side */}
      <RightSide />
    </div>
  );
}

export default App;
