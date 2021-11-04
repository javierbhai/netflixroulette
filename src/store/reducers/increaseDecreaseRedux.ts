export const counterReducer = (state: any = 0, action: any) => {
    switch (action.type) {
        case "@counter/incremented":
            return state + 1;

        case "@counter/decremented":
            return state - 1;

        case "@counter/reseted":
            return 0;
    }
}