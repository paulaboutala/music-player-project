import React from "react";
import musicLogo from "../assets/logo/music-logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={musicLogo} alt="Logo" />
      <a className="header__link" href="/">
        <h1>Music Player</h1>
      </a>
    </div>
  );
};

export default Header;
