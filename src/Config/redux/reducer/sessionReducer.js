const initialState = {
    profile: {
        username: '',
        email: '',
        gambar: '',
        token: ''
    },
    login: false,
    ResponseLogin: '',
    resetPassword: null,
    BtnLogin : false
}


const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_CHANGE":
            return {
                ...state,
                login: action.payload
            }
        case "RESPONSE_LOGIN":
            return {
                ...state,
                ResponseLogin: action.payload
            }
        case "RESET_PASSWORD":
            return {
                ...state,
                resetPassword: action.payload
            }
        case "BTN_LOGIN_DISABLE":
            return {
                ...state,
                BtnLogin: action.payload
            }
        default:
            return state
    }

}

export default sessionReducer