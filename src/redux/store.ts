import {combineReducers, createStore} from 'redux';
import {counterReducer} from './reducers/counter-reducer';
import {loadState, saveState} from '../utils/localstorage-utils';

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState())

export type AppRootStateType = ReturnType<typeof rootReducer>

store.subscribe(() => {
    saveState(store.getState())
})