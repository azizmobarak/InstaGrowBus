export const cart = (state = "", action) => {
    switch (action.type) {
        case "new":
            return state = action.data;
        default:
            return state = [];
    }
}