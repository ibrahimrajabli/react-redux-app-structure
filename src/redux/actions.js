import * as actionTypes from "./actionTypes"

export const someAction = (data)=>{
    return {
        type:actionTypes.SOME_ACTION_TYPE,
        payload:data
    };
};