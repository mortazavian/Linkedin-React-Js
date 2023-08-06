import "./styles/TopRightComponent.css";
import FollowInstance from "./FollowInstance";
import instance1Picture from "../../assets/images/TopRightComponentImages/instance1.jpg";
import instance2Picture from "../../assets/images/TopRightComponentImages/instance2.jpg";
import instance3Picture from "../../assets/images/TopRightComponentImages/instance3.jpg";

function TopRightComponent() {
  return (
    <div className="top-right-component-container">
      {/* Add to your feed  done
      3 instance of 3 pages 
      View all recommendations */}
      <div className="add-to-your-feed-top-right-component">
        Add to your feed
      </div>
      <FollowInstance
        image={instance1Picture}
        name={"Mohamad Mehdi Mohamadi"}
        title={
          "160k+ Followers| 80M+ Views| Telegram 15k+| Helping Jobseekers| Software"
        }
      ></FollowInstance>
      <FollowInstance
        image={instance2Picture}
        name={"Javad Javadian"}
        title={"Company • Higher Education"}
      ></FollowInstance>
      <FollowInstance
        image={instance3Picture}
        name={"Ali Pishro"}
        title={"Front-end developer New York"}
      ></FollowInstance>
    </div>
  );
}

export default TopRightComponent;
