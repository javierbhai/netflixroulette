import { combineReducers } from "redux";

const moviesInitialState = {
    loading: false,
    movies: []
}

export const loadMoviesAction = () => ({ type: 'LOAD_MOVIES' })

export const loadMoviesSuccessAction = (results: any[]) => ({ type: 'LOAD_MOVIES_SUCCESS', payload: results })

export const loadMoviesAsyncAction = () => async (dispatch: any) => {
    dispatch(loadMoviesAction())

    const { data } = await fetch("http://localhost:4000/movies").then(res => res.json())
    console.log("Data", data);

    dispatch(loadMoviesSuccessAction(data))
}

export const loadMoviesSortAsyncAction = (genre: string) => async (dispatch: any) => {
    let movie;
    dispatch(loadMoviesAction())
    if(genre==="all"){
        movie = await fetch("http://localhost:4000/movies").then(res => res.json())
    } else {
        movie = await fetch(`http://localhost:4000/movies?searchBy=genres&filter=${genre}`).then(res => res.json())
    }
    dispatch(loadMoviesSuccessAction(movie.data))
}

export const loadMoviesSortOrderAsyncAction = (order: string) => async (dispatch: any) => {
    let movie;
    
    dispatch(loadMoviesAction())
    if(order===""){
        movie = await fetch("http://localhost:4000/movies").then(res => res.json())
    } else {
        movie = await fetch(`http://localhost:4000/movies?sortOrder=${order}`).then(res => res.json())
    }
    dispatch(loadMoviesSuccessAction(movie.data))
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