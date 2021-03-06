const { USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST } = require("../constants/userConstants");

function userSigninReducer(state = {}, action) {
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return { loading: true };
      case USER_SIGNIN_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_SIGNIN_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
export { userSigninReducer }