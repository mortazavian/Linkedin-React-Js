import PostOption from "./PostOption";
import "./styles/TopMiddleComponent.css";
import profilePhoto from "../../assets/images/TopLeftComponentImages/profile.jpg";
import photo from "../../assets/icons/TopMiddleComponentIcons/photo.svg";
import video from "../../assets/icons/TopMiddleComponentIcons/video.svg";
import event from "../../assets/icons/TopMiddleComponentIcons/event.svg";
import article from "../../assets/icons/TopMiddleComponentIcons/article.svg";

const TopMiddleComponent = () => {
  return (
    <div className="top-middle-component-container">
      <div className="top-part-top-middle-component">
        <div className="profile-top-middle">
          <img
            src={profilePhoto}
            className="profile-photo-top-middle-component"
          />
        </div>
        <div className="input-top-middle-component">
          <input type="text" placeholder="Start a post" />
        </div>
      </div>
      <div className="bottom-part-top-middle-component">
        <PostOption photoAddress={photo} text={"photo"}></PostOption>
        <PostOption photoAddress={video} text={"vide"}></PostOption>
        <PostOption photoAddress={event} text={"event"}></PostOption>
        <PostOption photoAddress={article} text={"article"}></PostOption>
      </div>
    </div>
  );
};

export default TopMiddleComponent;
