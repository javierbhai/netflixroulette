import { combineReducers } from "redux";

interface moviesInitialStateInterface {
    loading: Boolean;
    movies: Array<Object>;
    moviesFilters:  Array<string>;
  }

let moviesInitialState: moviesInitialStateInterface;

moviesInitialState = {
    loading: false,
    movies: [],
    moviesFilters: []
};

export const loadMoviesAction = () => ({ type: 'LOAD_MOVIES' })

export const loadMoviesSuccessAction = (results: any[]) => ({ type: 'LOAD_MOVIES_SUCCESS', payload: results })

export const loadMoviesFiltersAction = (filters: Array<string>) => ({ type: 'LOAD_MOVIES_FILTERS', payload: filters })

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

export const loadMoviesFiltersAsyncAction = () => (dispatch: any) => {

    const filters = ["all", "Documentary", "comedy", "horror", "crime"]
    console.log("filters", filters);

    dispatch(loadMoviesFiltersAction(filters))
}

const moviesReducer = (state = moviesInitialState, action: any) => {
    switch (action.type) {
        case 'LOAD_MOVIES':
            return { ...state, loading: true }
        case 'LOAD_MOVIES_SUCCESS':
            return { ...state, loading: false, movies: action.payload }
        case 'LOAD_MOVIES_FILTERS':
            return { ...state, moviesFilters: action.payload, }
        default:
            return {...state}
    }
}

export const rootReducer = combineReducers({
    movies: moviesReducer
})