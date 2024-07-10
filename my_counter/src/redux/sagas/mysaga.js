import {delay,all, put,takeEvery} from 'redux-saga/effects';
import { incrementsuccess,decrementsuccess } from '../action/myActions';
function* incrementFunction(){
    yield delay(100);
    yield put(incrementsuccess());
}

function* decrementFunction(){
    yield delay(100);
    yield put(decrementsuccess());
}

function* watchDecrement(){
    yield takeEvery('DECREMENT_REQUESTED',decrementFunction)
}


function* watchIncrement(){
    yield takeEvery('INCREMENT_REQUESTED',incrementFunction);//INCREMENT_REQUESTED
}

export default function* mySaga(){
    yield all([
        watchIncrement(),
        watchDecrement()
    ]);

}