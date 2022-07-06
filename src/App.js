import MainPokemonContainer from "./components/MainPokemonContainer"
import SearchBar from "./components/SearchBar";
import styled from "styled-components";
import Pagination from "./components/Pagination";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  h2{
    align-self: center;
  }
  
`
function App() {
   
  return (
    <MainContainer className="App">
      <h2>Listado de pokemon</h2>
      <SearchBar className="searchBar"/>
      <MainPokemonContainer/>
      <Pagination/>
      
    </MainContainer>
  );
}

export default App;
