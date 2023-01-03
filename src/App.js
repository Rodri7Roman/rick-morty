import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import React, { useState } from "react";
import Form from "./components/Form/Form";
import Favorites from "./components/Favs/Favorites";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  let [characters, setCharacters] = useState([]);
  let location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const username = "romanrodri03@gmail.com";
  const password = "rodri123";

  const login = (userData) => {
    if (username === userData.username && password === userData.password) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onClose = (id) => {
    setCharacters(
      (characters = characters.filter((character) => character.id !== id))
    );
  };


  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route
          path="/"
          element={
            <Form login={login} onClose={onClose} characters={characters} />
          }
        />
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/favorites" element={<Favorites onClose={onClose} />} />

        <Route path="/detail/:detailId" element={<Detail  />} />
      </Routes>
    </div>
  );
}

export default App;
