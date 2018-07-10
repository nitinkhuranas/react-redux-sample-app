import *as ActionConstants from "./actionConstants"

export function setName(name){
    return {
        type: ActionConstants.SET_NAME,
        name,
    };
}