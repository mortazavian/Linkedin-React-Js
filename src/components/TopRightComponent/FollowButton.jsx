import "./styles/FollowButton.css";
import plusIcon from "./../../assets/icons/TopRightComponentIcons/plusIcon.svg";

const FollowButton = () => {
  return (
    <div>
      <button className="follow-button-top-right-component">
        <img className="plus-icon-top-left-component" src={plusIcon}></img>
        Follow
      </button>
    </div>
  );
};

export default FollowButton;
