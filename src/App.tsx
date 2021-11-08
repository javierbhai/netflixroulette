import React from 'react';
import { connect } from 'react-redux';
import { loadCharactersAsyncAction } from './store/rootReducer';

function App({ isCharactersLoading, characters, fetchCharacters }: any) {
  const handleLoadCharacters = () => {
    fetchCharacters()
  }

  return (
    <div className="App">
      <h4>Characters</h4>
      <code>Loading: { isCharactersLoading.toString() }</code>
      <ul>
        {characters.map((character:any) => <li key={character.id}>{character.title}</li>)}
      </ul>

      <button onClick={handleLoadCharacters}>Load Characters</button>

      <h4>Episodes</h4>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  characters: state.characters.characters,
  isCharactersLoading: state.characters.loading
})

const mapDispatchToProps = (dispatch: any) => ({
  fetchCharacters: () => { dispatch(loadCharactersAsyncAction()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

