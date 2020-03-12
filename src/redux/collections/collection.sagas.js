import CollectionActionTypes from './collection.types';
import {setTeam, fetchTeamError} from './collection.actions';
import {all, call,takeLatest, put} from 'redux-saga/effects';
import {firestore,getTeam} from '../../firebase/firebase.utils';


export function* fetchTeam(){
    try{
        
        const team = yield getTeam();
        console.log("Estoy trayendo : ",team);
        yield put(setTeam(team));
        
    }
    catch(error){
        yield put(fetchTeamError(error));
        

    }
   
}

export function* onFetchTeamStart(){
    //Cuando se ejecute la acción enseguida es atajada por la saga
    console.log("hola estoy dentro de la saga");
    yield takeLatest(CollectionActionTypes.FETCH_TEAM_START,fetchTeam);
}

export function* collectionSagas(){
    yield(all([call(onFetchTeamStart)]))
}