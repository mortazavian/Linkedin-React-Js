import "./styles/FollowInstance.css";

import FollowButton from "./FollowButton";
const FollowInstance = (props) => {
  return (
    <div>
      <div className="two-part-container-top-right-component">
        <div className="image-of-the-instance-of-page-top-right-component">
          <img src={props.image} alt="" />
        </div>
        <div className="container-of-name-title-follow">
          <div className="name-of-the-instance-of-page-top-right-component">
            {props.name}
          </div>
          <div className="title-of-the-instance-of-page-top-right-component">
            {props.title}
          </div>
          <div className="follow-button-in-follow-instance">
            <FollowButton></FollowButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowInstance;
