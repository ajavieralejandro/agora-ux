import {all, call} from 'redux-saga/effects';
import {collectionSagas} from './collections/collection.sagas';
//Aplica todas las sagas al middleware
export default function* rootSaga(){
    yield all([call(collectionSagas)]);
}