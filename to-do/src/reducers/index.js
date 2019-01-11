import { ADD, REMOVE } from "../actions";

//initialize default state
const initialState = [];

//create reducer function
export default (state = initialState, action) => {
    var temp = state;
    switch (action.type) {

        case ADD:
            temp.push(action.value);
            return Object.assign([], state, temp);
        case REMOVE:
            temp.splice(action.value, 1);
            return Object.assign([], state, temp);
        default:
            return state;
    }
};