import { createAction, props } from '@ngrx/store';
import { Post } from '../../post-details/post-details.component';

export const increment = createAction('[Post] Increment');
export const reset = createAction('[Post] Reset');
export const setId = createAction('[Post] Set id', props<{ id: number }>());

export const fetchPosts = createAction('[Post] Fetch Posts');
export const setPosts = createAction(
  '[Post] Set Posts',
  props<{ posts: Post[] }>()
);
