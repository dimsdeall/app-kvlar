const initialState = {
    ProdukList: []
}


const produkReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PRODUK_LIST":
            return {
                ...state,
                ProdukList: action.payload
            }
        default:
            return state
    }

}

export default produkReducer