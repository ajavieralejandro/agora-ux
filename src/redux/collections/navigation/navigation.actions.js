import NavigationActionTypes from "./navigation.types";

export const setHomePage = state => ({
  type: NavigationActionTypes.SET_HOMEPAGE,
  payload: state
});
