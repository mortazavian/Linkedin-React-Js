// This component contains all other components of the top left component.
import profilePhoto from "../../assets/images/TopLeftComponentImages/profile.jpg";
import topPhoto from "../../assets/images/TopLeftComponentImages/topImage.jpg";

import "./styles/TopLeftComponent.css";

const TopLeftComponent = () => {
  return (
    <div className="top-left-component-container-parent">
      <div className="top-left-component-container-children">
        {/* img top done
            img circle bottom done
            name done
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
        <center className="name-top-left-component">
          <div>Mehdi Mortazavian</div>
        </center>
        <center className="title-top-left-component">
          <div>computer engineering student at Shiraz university</div>
        </center>
      </div>
    </div>
  );
};

export default TopLeftComponent;
