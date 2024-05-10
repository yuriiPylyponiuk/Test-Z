import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Post] Increment');
export const reset = createAction('[Post] Reset');
export const setId = createAction('[Post] Set id', props<{ id: number }>());
