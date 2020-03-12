import CollectionActionTypes from './collection.types';

export const setTeam = (team) =>({
    type : CollectionActionTypes.FETCH_TEAM_SUCCESS,
    payload : team
})

export const fetchTeam = () =>({
    type: CollectionActionTypes.FETCH_TEAM_START
})

export const fetchTeamError = (error)=>({
    type: CollectionActionTypes.FETCH_TEAM_ERROR,
    payload : error
})