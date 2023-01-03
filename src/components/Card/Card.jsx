// import styled from "styled-components";
import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { add_favorite, delete_favorite } from "../../redux/actions";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";


function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.delete_favorite(props.id);
    }
    if (!isFav) {
      setIsFav(true);
      props.add_favorite(props);
    }
  };

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  return (
    <div className="card-container">
      {isFav ? (
        <button className="buttonFav" onClick={handleFavorite}>
          💚
        </button>
      ) : (
        <button className="buttonFav" onClick={handleFavorite}>
          🤍
        </button>
      )}

      <button className="buttonClose" onClick={() => props.onClose(props.id)}>
        Eliminar
      </button>

      <h2 className="name-character">{props.name}</h2>
      <div className="container-img">
        <img src={props.image} alt={props.name} />
      </div>

      <NavLink to={`/detail/${props.id}`} className="link-detail">
        <div className="contain-text">
          <h2 className="text-detail">View Details</h2>
        </div>
      </NavLink>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add_favorite: (character) => {
      dispatch(add_favorite(character));
    },
    delete_favorite: (id) => {
      dispatch(delete_favorite(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
