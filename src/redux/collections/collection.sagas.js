import CollectionActionTypes from './collection.types';
import {setTeam} from './collection.actions';
import {all, call,takeLatest, put} from 'redux-saga/effects';


export function* getTeam(){
    yield console.log("Tengo que traer la información del servidor...");
    yield put(setTeam("success"));

}

export function* onFetchTeamStart(){
    //Cuando se ejecute la acción enseguida es atajada por la saga
    console.log("hola estoy dentro de la saga");
    yield takeLatest(CollectionActionTypes.FETCH_TEAM_START,getTeam);
}

export function* collectionSagas(){
    yield(all([call(onFetchTeamStart)]))
}