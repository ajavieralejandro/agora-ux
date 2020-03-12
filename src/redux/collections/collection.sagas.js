import CollectionActionTypes from './collection.types';
import {setTeam} from './collection.actions';
import {all, call,takeLatest, put} from 'redux-saga/effects';
import {firestore,getTeam} from '../../firebase/firebase.utils';


export function* fetchTeam(){
    try{
        
        const snapshot = yield getTeam();
        console.log("Estoy trayendo : ",snapshot);
        
    }
    catch(error){
        console.log("UPS...something went wrong");
    }
    yield console.log("Tengo que traer la información del servidor...");
    yield put(setTeam("success"));

}

export function* onFetchTeamStart(){
    //Cuando se ejecute la acción enseguida es atajada por la saga
    console.log("hola estoy dentro de la saga");
    yield takeLatest(CollectionActionTypes.FETCH_TEAM_START,fetchTeam);
}

export function* collectionSagas(){
    yield(all([call(onFetchTeamStart)]))
}