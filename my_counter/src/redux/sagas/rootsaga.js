import { all,fork } from "redux-saga/effects";
import mySaga from "./mysaga";
import { watch } from "./mysaga";

export function* rootSaga(){
    yield all([fork(mySaga)]);
}