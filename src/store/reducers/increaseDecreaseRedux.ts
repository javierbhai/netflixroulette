import { INCREMENT } from "store/actions/MoviesActions/movies.types";

export const counterReducer = (state: any = 0, action: any) => {
    switch (action.type) {
        // case INCREMENT:
        //     return state + 1;
        case "@counter/incremented":
            return state + 1;

        case "@counter/decremented":
            return state - 1;

        case "@counter/reseted":
            return 0;
    }
}