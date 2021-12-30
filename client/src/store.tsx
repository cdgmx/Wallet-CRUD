import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { getWalletReducer } from './reducers/walletReducers';

const reducer = combineReducers({
    wallet: getWalletReducer,
});

const middleware = [thunk];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;