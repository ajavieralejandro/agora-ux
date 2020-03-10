import CollectionActionTypes from './collection.types';
import {setTeam} from './collection.actions';
import {all, call,takeLatest, put} from 'redux-saga/effects';


export function* getTeam(){
    console.log("estoy llegando bien aqui");
    yield put(setTeam("success"));

}

export function* onFetchTeamStart(){
    //Cuando se ejecute la acción enseguida es atajada por la saga
    yield takeLatest(CollectionActionTypes.FETCH_TEAM_START,getTeam);
}

export function* collectionSagas(){
    yield(all(onFetchTeamStart))
}