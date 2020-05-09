import NavigationActionTypes from "./navigation.types";

const INITIAL_STATE = {
  homePage: true
};

const navigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NavigationActionTypes.SET_HOMEPAGE:
      return {
        ...state,
        homePage: action.payload
      };

    default:
      return state;
  }
};

export default navigationReducer;
