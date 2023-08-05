import "./styles/TopMiddleComponent.css";
import profilePhoto from "../../assets/images/TopLeftComponentImages/profile.jpg";

const TopMiddleComponent = () => {
  return (
    <div>
      <div className="profile-top-middl">
        <img
          src={profilePhoto}
          className="profile-photo-top-middle-component"
        />
      </div>
    </div>
  );
};

export default TopMiddleComponent;
