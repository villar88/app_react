import { types } from "../types/types";


export const setError = (err) => ({
    type: types.uiSetError,
    payload: err
});

export const removeError = () => ({
    type: types.uiRemoveError
});

export const uiStartLoading = () => ({
    type: types.uiStartLoading
});

export const uiFinishLoadin = () => ({
    type: types.uiFinishLoadin
});