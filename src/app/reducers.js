import { GET_INPUT } from "./actions";

const DEFAULT_STATE = {
    input: ',' ,
    date: new Date()
};

export const getInputReducer = (state=DEFAULT_STATE, action) => {
    switch (action.type) {
        case GET_INPUT:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
};
