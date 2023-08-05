import "./App.css";
import Header from "./components/Header/Header";
import TopLeftComponent from "./components/TopLeftComponent/TopLeftComponent";
import TopMiddleComponent from "./components/TopMiddleComponent/TopMiddleComponent";
function App() {
  return (
    <>
      <Header></Header>
      <div className="index-container-three-part">
        <TopLeftComponent></TopLeftComponent>
        <TopMiddleComponent></TopMiddleComponent>
      </div>
    </>
  );
}

export default App;
