import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  Post,
  PostDetailsComponent,
  PostKey,
} from '../post-details/post-details.component';
import { selectId } from '../reducers/post-list/post-list.selectors';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  imports: [PostDetailsComponent, CommonModule],
})
export class PostListComponent implements OnInit, OnDestroy {
  id$?: Observable<number>;

  activePost?: Post;
  property: PostKey = 'title';
  posts: Post[] = [];
  private subscriptions: Subscription = new Subscription();

  constructor(private postService: PostService, private store: Store) {
    this.id$ = this.store.select(selectId);
  }

  isActivePost(post: Post): boolean {
    return this.activePost?.id === post.id;
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.postService
        .getPosts()
        .pipe(
          catchError((err) =>
            throwError(() => new Error('Failed to load posts: ' + err.message))
          )
        )
        .subscribe({
          next: (posts) => (this.posts = posts),
          error: (err) => console.error(err),
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
