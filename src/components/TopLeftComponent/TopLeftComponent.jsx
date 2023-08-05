// This component contains all other components of the top left component.
import profilePhoto from "../../assets/images/TopLeftComponentImages/profile.jpg";
import topPhoto from "../../assets/images/TopLeftComponentImages/topImage.jpg";
import bookmarkSvg from "../../assets/icons/TopLeftComponentIcons/bookmark.svg";

import "./styles/TopLeftComponent.css";

const TopLeftComponent = () => {
  return (
    <div className="top-left-component-container-parent">
      <div className="top-left-component-container-children">
        {/* img top done
            img circle bottom done
            name done
            title done
            hr done
            Who's viewed your profile done
            Impressions of your post done
            hr done
            My items done
          
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
        <hr className="top-left-component-hr" />
        <center>
          <div className="who-viewed-profile-top-left-container">
            <div className="who-viewed-profile-top-left-container-text">
              Who's viewed your profile
            </div>
            <div className="who-viewed-profile-top-left-container-number">
              20
            </div>
          </div>
        </center>
        <center>
          <div className="impressions-of-your-post">
            <div className="impressions-of-your-post-text">
              Impressions of your post
            </div>
            <div className="impressions-of-your-post-number">82</div>
          </div>
        </center>
        <hr className="top-left-component-hr" />
        <center className="my-items-top-left-component">
          <div className="my-items-top-left-component-svg">
            <img src={bookmarkSvg} />
          </div>
          <div className="my-items-top-left-component-text">My items</div>
        </center>
      </div>
    </div>
  );
};

export default TopLeftComponent;
