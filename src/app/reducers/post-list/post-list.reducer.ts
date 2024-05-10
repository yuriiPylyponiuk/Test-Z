import { createReducer, on } from '@ngrx/store';
import { Post } from '../../post-details/post-details.component';
import { increment, reset, setId } from './post-list.action';

export interface PostList {
  count: number;
  id: number;
  posts: Post[];
}

export const initialState: PostList = {
  count: 0,
  id: 0,
  posts: [],
};

export const postReduceer = createReducer(
  initialState,
  on(increment, (state) => ({
    ...state,
    count: state.count < 3 ? state.count + 1 : state.count,
  })),
  on(setId, (state, { id }) => ({ ...state, id: id })),
  on(reset, (state) => ({ ...state, count: 0 }))
);
