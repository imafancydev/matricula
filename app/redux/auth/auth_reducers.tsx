const initialState = {
    loggedIn: false,
    loading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          loggedIn: true,
          loading: false,
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          loggedIn: false,
          loading: false,
          error: action.payload,
        };
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          loggedIn: true,
          loading: false,
          error: null,
        };
      case 'REGISTER_FAILURE':
        return {
          ...state,
          loggedIn: false,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  