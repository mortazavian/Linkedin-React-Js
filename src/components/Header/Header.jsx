import HeaderIcons from "./HeaderIcons";
import MainLogo from "./MainLogo";
import SearchBox from "./SearchBox";

import "./styles/Header.css";

const Header = (props) => {
  return (
    <div>
      <header className="jjj">
        <MainLogo></MainLogo>
        <SearchBox></SearchBox>
        <HeaderIcons></HeaderIcons>
      </header>
    </div>
  );
  // const buttons = [
  //   {
  //     name: "Home",
  //     xmlns: "http://www.w3.org/2000/svg",
  //     viewBox: "0 0 24 24",
  //     data_supported_dps: "24x24",
  //     fill: "currentColor",
  //     class: "mercado-match",
  //     width: "24",
  //     height: "24",
  //     focusable: "false",
  //     d: "M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",
  //   },
  //   {
  //     name: "My Network",
  //     xmlns: "",
  //     viewBox: "0 0 24 24",
  //     data_supported_dps: "24x24",
  //     fill: "currentColor",
  //     class: "mercado-match",
  //     width: "24",
  //     height: "24",
  //     focusable: "false",
  //     d: "M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z",
  //   },
  //   {
  //     name: "Jobs",
  //     xmlns: "",
  //     viewBox: "0 0 24 24",
  //     data_supported_dps: "24x24",
  //     fill: "currentColor",
  //     class: "mercado-match",
  //     width: "24",
  //     height: "24",
  //     focusable: "false",
  //     d: "M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z",
  //   },
  //   {
  //     name: "Messaging",
  //     xmlns: "http://www.w3.org/2000/svg",
  //     viewBox: "0 0 24 24",
  //     data_supported_dps: "24x24",
  //     fill: "currentColor",
  //     class: "mercado-match",
  //     width: "24",
  //     height: "24",
  //     focusable: "false",
  //     d: "M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z",
  //   },
  //   {
  //     name: "Notifications",
  //     xmlns: "http://www.w3.org/2000/svg",
  //     viewBox: "0 0 24 24",
  //     data_supported_dps: "24x24",
  //     fill: "currentColor",
  //     class: "mercado-match",
  //     width: "24",
  //     height: "24",
  //     focusable: "false",
  //     d: "M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z",
  //   },
  // ];

  // return (
  //   <header>
  //     <HeaderButton
  //       name={buttons[0].name}
  //       class={buttons[0].class}
  //       aria_hidden={buttons[0].aria_hidden}
  //       xmlns={buttons[0].xmlns}
  //       fill={buttons[0].fill}
  //       viewBox={buttons[0].viewBox}
  //       d={buttons[0].d}
  //     ></HeaderButton>

  //     <HeaderButton
  //       name={buttons[1].name}
  //       class={buttons[1].class}
  //       aria_hidden={buttons[1].aria_hidden}
  //       xmlns={buttons[1].xmlns}
  //       fill={buttons[1].fill}
  //       viewBox={buttons[1].viewBox}
  //       d={buttons[1].d}
  //     ></HeaderButton>

  //     <HeaderButton
  //       name={buttons[2].name}
  //       class={buttons[2].class}
  //       aria_hidden={buttons[2].aria_hidden}
  //       xmlns={buttons[2].xmlns}
  //       fill={buttons[2].fill}
  //       viewBox={buttons[2].viewBox}
  //       d={buttons[2].d}
  //     ></HeaderButton>
  //     <HeaderButton
  //       name={buttons[3].name}
  //       class={buttons[3].class}
  //       aria_hidden={buttons[3].aria_hidden}
  //       xmlns={buttons[3].xmlns}
  //       fill={buttons[3].fill}
  //       viewBox={buttons[3].viewBox}
  //       d={buttons[3].d}
  //     ></HeaderButton>

  //     <HeaderButton
  //       name={buttons[4].name}
  //       class={buttons[4].class}
  //       aria_hidden={buttons[4].aria_hidden}
  //       xmlns={buttons[4].xmlns}
  //       fill={buttons[4].fill}
  //       viewBox={buttons[4].viewBox}
  //       d={buttons[4].d}
  //     ></HeaderButton>
  //   </header>
  // );
};

export default Header;
