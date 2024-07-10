import { createStore,applyMiddleware,combineReducers } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./sagas/rootsaga";
import myReducer from "./reducer/myReducer";

const rootReducer=combineReducers({
    counts:myReducer
});

const sagaMiddleWare=createSagaMiddleware();

const store=createStore(
    rootReducer,applyMiddleware(sagaMiddleWare)
)

sagaMiddleWare.run(rootSaga);

export default store;