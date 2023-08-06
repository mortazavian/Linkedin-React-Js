import TopLeftComponent from "../components/TopLeftComponent/TopLeftComponent";
import TopMiddleComponent from "../components/TopMiddleComponent/TopMiddleComponent";
import TopRightComponent from "../components/TopRightComponent/TopRightComponent";

import "./styles/Home.css";

const Home = () => {
  return (
    <div className="index-container-three-part">
      <div className="top-left-component-index-page">
        <TopLeftComponent></TopLeftComponent>
      </div>
      <div>
        <TopMiddleComponent></TopMiddleComponent>
      </div>
      <div className="top-right-component-index-page">
        <TopRightComponent></TopRightComponent>
      </div>
    </div>
  );
};

export default Home;
