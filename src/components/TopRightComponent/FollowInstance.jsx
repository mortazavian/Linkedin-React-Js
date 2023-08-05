import "./styles/FollowInstance.css";

const FollowInstance = (props) => {
  return (
    <div>
      <div className="image-of-the-page-top-right-component">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default FollowInstance;
