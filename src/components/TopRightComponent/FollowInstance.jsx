import "./styles/FollowInstance.css";

const FollowInstance = (props) => {
  return (
    <div>
      <div className="two-part-container-top-right-component">
        <div className="image-of-the-instance-of-page-top-right-component">
          <img src={props.image} alt="" />
        </div>
        <div className="name-of-the-instance-of-page-top-right-component">
          {props.name}
        </div>
      </div>
    </div>
  );
};

export default FollowInstance;
