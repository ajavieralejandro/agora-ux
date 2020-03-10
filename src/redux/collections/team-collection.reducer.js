import CollectionActionTypes from './collection.types';
const INITIAL_STATE = {
    team : null
}

const teamReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){

        case CollectionActionTypes.FETCH_TEAM_SUCCESS : 
        return{
            ...state,
            team : action.payload
        }

        default :
            return state;

    }
}

export default teamReducer;