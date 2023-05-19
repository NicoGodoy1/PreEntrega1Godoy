import "./styles.css";
import "./index.css"


// COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


const App = () => {
  return (
    <div className="App">
      <NavBar color="whitesmoke" />
      <ItemListContainer greeting="¡Aprovechá las ofertas destacadas!" />
    </div>
  );
};

export default App;
