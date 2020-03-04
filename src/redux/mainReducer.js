import * as actionTypes from "./actionTypes"

const initialState = {someData:{}};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SOME_ACTION_TYPE:
            return {...state, someData: action.payload};
        default:return state
    }
};

export default mainReducer;