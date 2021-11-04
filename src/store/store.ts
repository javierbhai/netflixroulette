import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "store/reducers"


const thunkMiddleware = applyMiddleware(thunk);

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = compose(thunkMiddleware, composeEnhancers());
export const store = createStore(rootReducer, enhancers);



const actionIncrement = {
    type:"@counter/incremented"
}

const actionDecrement = {
    type:"@counter/decremented"
}

const actionReseted = {
    type:"@counter/reseted"
}

// counterReducer(0, actionIncrement)
// counterReducer(1, actionDecrement)


store.dispatch(actionIncrement);
store.subscribe(() => {
    console.log(store.getState())
})