import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from '../redux/contacts/contactSlice'


export const store = configureStore({
  reducer: {
   [contactApi.reducerPath]:contactApi.reducer,
  
  },
  middleware:getDefaultMiddleware=> [
     ...getDefaultMiddleware(),
     contactApi.middleware,
  ],
 
});




// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { contactsReducer } from './contacts/contactSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
// });

// export const persistor = persistStore(store);