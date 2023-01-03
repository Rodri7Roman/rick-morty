import React from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";

const Favorites = (props) => {
  let myFavorites = useSelector((state) => state.myFavorites);
  return (
    <div>
      {myFavorites.length > 0 ? (
        <>
          <div className="container-text-favs">
            <h1>Favoritos💚</h1>
          </div>
          <div className="container-favs">
            {myFavorites.map((character) => (
              <Card
                name={character.name}
                gender={character.gender}
                species={character.species}
                image={character.image}
                key={character.id}
                id={character.id}
                onClose={props.onClose}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="container-text">
          <h1>No tienes ningún personaje como favorito</h1>
        </div>
      )}
    </div>
  );
};

export default Favorites;
