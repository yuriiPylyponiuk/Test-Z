import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  Keys,
  Post,
  PostDetailsComponent,
} from '../post-details/post-details.component';
import { PostSquareComponent } from '../post-square/post-square.component';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
  imports: [PostSquareComponent, PostDetailsComponent, CommonModule],
})
export class PostListComponent {
  activePost!: Post;
  property: Keys = 'title';
  posts!: Post[];

  constructor(private postService: PostService) {}

  isActivePost(post: Post): boolean {
    return this.activePost === post;
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
  }
}
