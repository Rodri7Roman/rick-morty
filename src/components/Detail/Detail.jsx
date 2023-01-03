import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./styles.css";

const Detail = (props) => {
  const { detailId } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState({});

  const backToHome = () => {
    navigate("/home");
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className="detail">
      <button onClick={backToHome} className="button-back">
        Volver al Home
      </button>

      <div className="container-detail">
        <div className="text">
          <h2>NAME: {character.name}</h2>
          <h2>STATUS: {character.status}</h2>
          <h2>SPECIE: {character.species}</h2>
          <h2>GENDER: {character.gender}</h2>
          <h2>ORIGIN: {character.origin?.name}</h2>
        </div>

        <div className="container-img">
          <img src={character.image} alt={character.name} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
