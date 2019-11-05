import { GET_INPUT } from "./actions";

export const getInputReducer = (state='Zero input', action) => {
    switch (action.type) {
        case GET_INPUT:
            return state = action.input;
        default:
            return state;
    }
};
