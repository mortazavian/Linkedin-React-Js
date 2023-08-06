import TopLeftComponent from "../components/TopLeftComponent/TopLeftComponent";
import TopMiddleComponent from "../components/TopMiddleComponent/TopMiddleComponent";
import TopRightComponent from "../components/TopRightComponent/TopRightComponent";
const Home = () => {
  return (
    <div className="index-container-three-part">
      <TopLeftComponent></TopLeftComponent>
      <TopMiddleComponent></TopMiddleComponent>
      <TopRightComponent></TopRightComponent>
    </div>
  );
};

export default Home;
