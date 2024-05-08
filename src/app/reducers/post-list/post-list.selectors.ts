import { createSelector } from '@ngrx/store';
import { PostList } from './post-list.reducer';

export const selectPost = (state: any) => state.posts;
export const selectCount = createSelector(
  selectPost,
  (state: PostList) => state.count
);
export const selectId = createSelector(
  selectPost,
  (state: PostList) => state.id
);
