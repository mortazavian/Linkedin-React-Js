import searchIcon from "../../assets/icons/HeaderIcons/SearchIcon.svg";

import "./styles/SearchBox.css";

const SearchBox = () => {
  return (
    <div className="input-icon-header">
      <img src={searchIcon} className="search-icon-header" />
      <input type="text" placeholder="Search" className="search-box-header" />
    </div>
  );
};

export default SearchBox;
