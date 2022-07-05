import { compose, createStore, applyMiddleware, Middleware } from 'redux'

import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './root-reducer'

import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './root-saga'

/* -------------------------------------------------------------------------- */
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

export type RootState = ReturnType<typeof rootReducer>

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[]
}

const persistConfig: ExtendedPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware))

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const composedEnhancer = composeEnhancer(applyMiddleware(...middleware))

const store = createStore(persistedReducer, undefined, composedEnhancer)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default store
