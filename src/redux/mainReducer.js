import * as actionTypes from "./actionTypes"

const initialState = {someData:{"name":"name1"}};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SOME_ACTION_TYPE:
            return {...state, name: action.payload};
        default:return state
    }
};

export default mainReducer;