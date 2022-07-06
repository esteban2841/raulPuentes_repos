import MainPokemonContainer from "./components/MainPokemonContainer"
import SearchBar from "./components/SearchBar";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
    </MainContainer>
  );
}

export default App;
