import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './reducers/weatherReducer';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const rootReducer = combineReducers({
   weatherList : weatherReducer
});

const middleware = [thunk];

const initialState = {

}
export type AppState = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer, initialState,compose(
    applyMiddleware(...middleware),
    composeEnhancers()
  ));