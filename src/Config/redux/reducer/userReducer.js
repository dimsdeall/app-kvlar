const initialState = {
  UserList: [],
  MyUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LIST":
      return {
        ...state,
        UserList: action.payload,
      };
    case "MY_USER":
      return {
        ...state,
        MyUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
