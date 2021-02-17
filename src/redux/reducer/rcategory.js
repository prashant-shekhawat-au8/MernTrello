let initialState = {
    category:[]
}



const rcategory = (state= initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case "CATEGORY":
            return {...stateCopy,category:action.payload};
        default:
            return stateCopy;
    }
}

export default rcategory; 