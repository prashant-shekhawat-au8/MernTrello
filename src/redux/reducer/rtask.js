let initialState = {
    task:[]
}



const rtask = (state= initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case "TASK":
            return {...stateCopy,task:action.payload};
        default:
            return stateCopy;
    }
}

export default rtask; 