export const GET_INPUT = 'GET_INPUT';

export const getInputAction = (txt, timestamp) => {
    return {
        type: GET_INPUT,
        data: {
            input: txt,
            date: timestamp
        }
    }
};
