import { persistReducer } from 'redux-persist';
import homeReducer from "./container/HomeScreen/homeReducer";
import { persistCombineReducers } from 'redux-persist';
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';


const whitelist = ['homeReducer']

const rootReducerConfig = {
  key: 'primary',
  storage: AsyncStorage,
  whitelist
  //blacklist
};


export default persistedReducers = persistCombineReducers
(rootReducerConfig, {
  homeReducer
});