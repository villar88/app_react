import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { notesReducer } from "./notesReducer";
import { uiReducer } from "./uiReducer";


export const rootReducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer
});