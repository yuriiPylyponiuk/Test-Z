import { HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Post } from '../post-details/post-details.component';
import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService],
    });
    service = TestBed.inject(PostService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve posts and return a valid list', () => {
    const mockPosts: Post[] = [
      { id: 1, title: 'Test Post 1', body: 'Hello world', userId: 1 },
      { id: 2, title: 'Test Post 2', body: 'Hello again', userId: 2 },
    ];

    service.getPosts().subscribe((posts) => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(mockPosts);
    });

    const req = httpTestingController.expectOne(service['apiUrl']);
    expect(req.request.method).toEqual('GET');
    req.flush(mockPosts);
  });

  it('should handle an error response', () => {
    const errorResponse = new HttpErrorResponse({
      status: 404,
      statusText: 'Not Found',
      error: { message: 'No posts found' },
    });

    service.getPosts().subscribe({
      next: () => fail('expected an error, not posts'),
      error: (error) => expect(error.message).toContain('Server-side error'),
    });

    const req = httpTestingController.expectOne(service['apiUrl']);
    expect(req.request.method).toEqual('GET');
    req.flush('Something went wrong', errorResponse);
  });
});
