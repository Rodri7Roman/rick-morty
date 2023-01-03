import "./styles.css";

const Home = (props) => {
  const characters = props.characters;
  return (
    <div className="container-home">
      <div className="container-text">
        <h1>Ingrese {(characters.length === 0 && 'un') || 'otro'} número para mostrar algún personaje de Rick & Morty</h1>
      </div>
      {characters.length < 1 && (
        <div className="container-img animate__animated animate__zoomIn">
          <img src="/img/8BkJ.gif" alt="" className="img-home" />
        </div>
      )}
    </div>
  );
};

export default Home;
