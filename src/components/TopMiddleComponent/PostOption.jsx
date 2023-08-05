import "./styles/PostOption.css";


const PostOption = (props) => {
  return (
    <div className="post-option-container">
      <img src={props.photoAddress} alt="" />
      <div className="post-option-text">{props.text}</div>
    </div>
  );
};

export default PostOption;
