import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import firebase from "../config/firebase";
import rootReducer from "../reducers/rootReducer";

const rrfconfig = {
  userProfile: "user",
  attachAuthIsReady: true,
  useFiresotreForProfile: true
};

export const configureStore = preloadedState => {
  const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  const composedEnhancer = composeWithDevTools(
    ...storeEnhancers,
    reactReduxFirebase(firebase, rrfconfig),
    reduxFirestore(firebase)
  );

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("../reducers/rootReducer", () => {
        const newRootReducer = require("../reducers/rootReducer").default;
        store.replaceReducer(newRootReducer);
      });
    }
  }

  return store;
};
