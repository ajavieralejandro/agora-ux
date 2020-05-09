import { combineReducers } from "redux";
import teamReducer from "./collections/team-collection.reducer";
import navigationReducer from "./collections/navigation/navigation.reducer";

export default combineReducers({
  team: teamReducer,
  navigation: navigationReducer
});
