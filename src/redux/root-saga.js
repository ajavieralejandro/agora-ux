import {all, call} from 'redux-saga/effects';
import {collectionSagas} from './collections/collection.sagas';
//Aplica todas las sagas al middleware
export default function* rootSaga(){
    console.log("llego a llamar  todas las sagas con exito");
    yield all([call(collectionSagas)]);
}