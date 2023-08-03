// This component contains all other components of the top left component.
import profilePhoto from "../../assets/images/TopLeftComponentImages/profile.jpg";
import topPhoto from "../../assets/images/TopLeftComponentImages/topImage.jpg";

import "./styles/TopLeftComponent.css";

const TopLeftComponent = () => {
  return (
    <div>
      <div className="top-left-component-container">
        {/* img top 
            img circle bottom done
            name 
            title
            hr
            Who's viewed your profile
            Impressions of your post
            hr 
            My items
          
          */}

        <img src={topPhoto} className="top-image-top-left-component"></img>
        <img
          src={profilePhoto}
          className="profile-image-top-left-component"
        ></img>
      </div>
    </div>
  );
};

export default TopLeftComponent;
