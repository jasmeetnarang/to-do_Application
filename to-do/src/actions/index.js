// Namespace Actions aka Action Types
export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const FILTER = "FILTER";

/*Action creator*/
export const add = (value) => {
    return {
        type: ADD,
        value
    }
}

export const remove = (value) => {
    return {
        tyoe: REMOVE,
        value
    }
}

//export 

