// import thunk from "redux-thunk";
// import { rootReducer } from "store/reducers"


// const thunkMiddleware = applyMiddleware(thunk);

// declare global {
//     interface Window {
//       __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancers = compose(thunkMiddleware, composeEnhancers());
// export const store = createStore(rootReducer, enhancers);



// const actionIncrement = {
//     type:"@counter/incremented"
// }

// const actionDecrement = {
//     type:"@counter/decremented"
// }

// const actionReseted = {
//     type:"@counter/reseted"
// }


// store.dispatch(actionIncrement);
// store.subscribe(() => {
//     console.log(store.getState())
// })


import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

const thunkMiddleware = applyMiddleware(thunk);

// @ts-ignore
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const enhancers = compose(thunkMiddleware, devTools);

export const store = createStore(rootReducer, enhancers);