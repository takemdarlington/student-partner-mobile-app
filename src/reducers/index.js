import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage'
import rootReducer from './RootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loading', 'error'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootStore = createStore(
  persistedReducer,
  composeEnhancer( applyMiddleware(thunk) ),
);

export const store = rootStore;

export const persist = callback => persistStore(rootStore, null, callback);
