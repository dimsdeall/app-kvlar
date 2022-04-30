const initialState = {
    PageLoading: true
}


const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PAGE_LOADING":
            return {
                ...state,
                PageLoading: action.payload
            }
        default:
            return state
    }

}

export default globalReducer