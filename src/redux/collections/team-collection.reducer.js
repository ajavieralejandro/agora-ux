import CollectionActionTypes from './collection.types';
const INITIAL_STATE = {
    team : [],
    loading : true,
    error: ""
}

const teamReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){

        case CollectionActionTypes.FETCH_TEAM_SUCCESS : 
        return{
            ...state,
            loading : false,
            team : action.payload
        }

        case CollectionActionTypes.FETCH_TEAM_ERROR:
        return{
            ...state,
            error : action.payload
        }

        default :
            return state;

    }
}

export default teamReducer;