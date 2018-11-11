import { createStore } from 'redux';
import { messageReducer } from './reducers';

export const store = createStore(messageReducer);

store.subscribe(() => console.log(store.getState()))