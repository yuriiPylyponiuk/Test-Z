import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
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

export type PostKey = keyof Post;

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  @Input() post!: Post;
  @Input() property!: PostKey;
  @Input() active!: boolean;

  count$!: Observable<number>;
  id$!: Observable<number>;
  currentLabel!: string[];

  private idSubscription?: Subscription;
  private static readonly order: PostKey[] = ['title', 'id', 'userId', 'body'];

  constructor(private store: Store) {
    this.count$ = this.store.select(selectCount);
    this.id$ = this.store.select(selectId);
  }

  ngOnInit() {
    this.currentLabel = PostDetailsComponent.order.map(
      (key) => this.post[key]?.toString() || ''
    );
  }

  ngOnDestroy() {
    this.idSubscription?.unsubscribe();
  }

  togglePostDetails() {
    this.store.dispatch(setId({ id: this.post.id }));

    if (this.idSubscription) {
      this.idSubscription.unsubscribe();
    }

    this.idSubscription = this.id$.subscribe((id) => {
      if (id === this.post.id) {
        this.store.dispatch(increment());
      } else if (id !== this.post.id && id !== 0) {
        this.store.dispatch(reset());
      }
    });
  }
}
