import MainPokemonContainer from "./components/MainPokemonContainer"
import SearchBar from "./components/SearchBar";
import styled from "styled-components";
import Pagination from "./components/Pagination";
import './App.css';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1f252b;
  color: white;
  gap: 20px;
  max-width: 1500px;
  margin-top: 20px;
  width: 100%;

  /* .pokeContainer::after{
    content: <Pagination/>;
  } */
  h1{
    align-self: center;
    line-height: 0;
    padding: 0;
  }
  
`
function App() {
   
  return (
    <MainContainer className="App">
      <h1 className="title">Listado de Pokemon</h1>
      <SearchBar className="searchBar"/>
      <MainPokemonContainer className="pokeContainer" />
      <Pagination className="pagination"/>
    </MainContainer>
  );
}

export default App;
