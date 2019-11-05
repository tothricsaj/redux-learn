export const GET_INPUT = 'GET_INPUT';

export const getInputAction = (txt) => {
    return {
        type: GET_INPUT,
        input: txt
    }
};
