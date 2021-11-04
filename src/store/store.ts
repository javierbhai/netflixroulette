import { createStore } from "redux";

const counterReducer = (state: any = 0, action: any) => {
    switch (action.type) {
        case "@counter/incremented":
            return state + 1;

        case "@counter/decremented":
            return state - 1;

        case "@counter/reseted":
            return 0;
    }
}

const store = createStore(counterReducer);

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