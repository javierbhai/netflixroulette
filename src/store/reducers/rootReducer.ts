
const moviesInitialState = {
    movies: []
}

export const loadCharactersSuccessAction = (results: any[]) => ({ type: 'LOAD_CHARACTERS_SUCCESS', payload: results })

export const loadCharactersAsyncAction = () => async (dispatch: any) => {
    dispatch(loadCharactersAction())

    const { results } = await fetch('https://rickandmortyapi.com/api/character').then(res => res.json())
    dispatch(loadCharactersSuccessAction(results))
}