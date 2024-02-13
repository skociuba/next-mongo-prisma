import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import {PostsApi} from './query/Posts';
import {PostsApiPrisma} from './posts/Post';

export const store = configureStore({
  reducer: {
    [PostsApi.reducerPath]: PostsApi.reducer,
    [PostsApiPrisma.reducerPath]: PostsApiPrisma.reducer, // Dodaj to
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      PostsApi.middleware,
      PostsApiPrisma.middleware,
    ),
});

setupListeners(store.dispatch);
