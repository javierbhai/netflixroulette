import { combineReducers } from "redux";

const moviesInitialState = {
    loading: false,
    movies: []
}

export const loadMoviesAction = () => ({ type: 'LOAD_MOVIES' })

export const loadMoviesSuccessAction = (results: any[]) => ({ type: 'LOAD_MOVIES_SUCCESS', payload: results })

export const loadMoviesAsyncAction = () => async (dispatch: any) => {
    dispatch(loadMoviesAction())

    const { data } = await fetch('http://localhost:4000/movies').then(res => res.json())
    console.log("lkasjdlkajs", data);

    dispatch(loadMoviesSuccessAction(data))
}

const moviesReducer = (state = moviesInitialState, action: any) => {
    switch (action.type) {
        case 'LOAD_MOVIES':
            return { ...state, loading: true }
        case 'LOAD_MOVIES_SUCCESS':
            return { ...state, loading: false, movies: action.payload }
        default:
            return {...state}
    }
}


export const rootReducer = combineReducers({
    movies: moviesReducer
})