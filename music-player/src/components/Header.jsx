import React from "react";
import musicLogo from "../assets/logo/music-logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={musicLogo} alt="Logo do Spotify" />
      </Link>

      <Link to="/" className="header__link">
        <h1>Music Player</h1>
      </Link>
    </div>
  );
};

export default Header;
