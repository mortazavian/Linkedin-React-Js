import "./styles/TopRightComponent.css";
import FollowInstance from "./FollowInstance";

function TopRightComponent() {
  return (
    <div className="top-right-component-container">
      {/* Add to your feed  done
      3 instance of 3 pages 
      View all recommendations */}
      <div className="add-to-your-feed-top-right-component">
        Add to your feed
      </div>
      <FollowInstance></FollowInstance>
    </div>
  );
}

export default TopRightComponent;
