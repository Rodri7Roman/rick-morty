import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = (props) => {
  const myFavorites = useSelector((state) => state.myFavorites);

  return (
    <nav className="nav-container">
      <div>
        <div className="button-container">
          <NavLink to="/home">
            <button className="button-nav">Home</button>
          </NavLink>
        </div>

        <div className="button-container">
          <NavLink to="/favorites">
            <button className="button-nav">
              Favs
              {myFavorites.length > 0 && (
                <div className="icon-favorites">
                  <p>{myFavorites.length}</p>
                </div>
              )}
            </button>
          </NavLink>
        </div>
        
        <div className="button-container">
          <NavLink to="/about">
            <button className="button-nav">About</button>
          </NavLink>
        </div>
      </div>

      <SearchBar className="searchBar" onSearch={props.onSearch} />
    </nav>
  );
};

export default Nav;
