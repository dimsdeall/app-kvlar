const initialState = {
    PenjualanList: []
}


const penjualanReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PENJUALAN_LIST":
            return {
                ...state,
                PenjualanList: action.payload
            }
        default:
            return state
    }

}

export default penjualanReducer