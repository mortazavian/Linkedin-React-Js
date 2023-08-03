import "./styles/HeaderButton.css";

const HeaderButton = (props) => {
  return (
    <div className="icon">
      <svg
        className="svg"
        class={props.class}
        //   aria-hidden={props.aria_hidden}
        data-supported-dps={props.data_supported_dps}
        xmlns={props.xmlns}
        fill={props.fill}
        viewBox={props.viewBox}
        width={props.width}
        height={props.height}
        focusable={props.focusable}
      >
        <path d={props.d}></path>
      </svg>
      <div className="text-under-icon-header">{props.name}</div>
    </div>
  );
};

export default HeaderButton;
