import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { PostList, todoReduceer } from './post-list/post-list.reducer';

export interface State {
  posts: PostList;
}

export const reducers: ActionReducerMap<State> = {
  posts: todoReduceer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
