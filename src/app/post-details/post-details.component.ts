import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  increment,
  reset,
  setId,
} from '../reducers/post-list/post-list.action';
import {
  selectCount,
  selectId,
} from '../reducers/post-list/post-list.selectors';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
type PostType = number | string;
export type Keys = 'userId' | 'id' | 'title' | 'body';
const order = ['title', 'id', 'userId', 'body'];

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
})
export class PostDetailsComponent {
  @Input() post!: Post;
  @Input() property!: Keys;
  @Input() active!: boolean;

  count$?: Observable<number>;
  id$?: Observable<number>;

  currentLabel: PostType[] | undefined;

  ngOnInit() {
    this.currentLabel = order.map((key) => this.post[key as keyof Post]);
  }

  constructor(private store: Store) {
    this.count$ = this.store.select(selectCount);
    this.id$ = this.store.select(selectId);
  }

  togglePostDetails() {
    this.store.dispatch(setId({ id: this.post.id }));

    this.id$?.subscribe((id) => {
      if (id === this.post.id) {
        this.store.dispatch(increment());
      } else if (id !== this.post.id && id !== 0) {
        this.store.dispatch(reset());
      }
    });
  }
}
