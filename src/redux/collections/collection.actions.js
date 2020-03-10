import CollectionActionTypes from './collection.types';

export const setTeam = (team) =>({
    type : CollectionActionTypes.FETCH_TEAM_SUCCESS,
    payload : team
})

export const fetchTeam = () =>({
    type: CollectionActionTypes.FETCH_TEAM_START
})