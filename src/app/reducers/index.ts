import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { PostList, postReduceer } from './post-list/post-list.reducer';

export interface State {
  posts: PostList;
}

export const reducers: ActionReducerMap<State> = {
  posts: postReduceer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
