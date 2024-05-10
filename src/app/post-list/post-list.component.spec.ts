import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { PostService } from '../services/post.service';
import { PostListComponent } from './post-list.component';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let storeMock: any;
  let postServiceMock: any;

  beforeEach(async () => {
    postServiceMock = {
      getPosts: jasmine
        .createSpy()
        .and.returnValue(
          of([{ userId: 1, id: 123, title: 'Test Post', body: 'Test Body' }])
        ),
    };

    storeMock = {
      select: jasmine.createSpy('select').and.returnValue(of(123)),
    };

    await TestBed.configureTestingModule({
      imports: [PostListComponent],
      providers: [
        { provide: PostService, useValue: postServiceMock },
        { provide: Store, useValue: storeMock },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load posts on initialization', () => {
    expect(postServiceMock.getPosts).toHaveBeenCalled();
    expect(component.posts.length).toEqual(1);
    expect(component.posts[0].title).toEqual('Test Post');
  });

  it('should return true if the post is the active post', () => {
    component.activePost = {
      userId: 1,
      id: 123,
      title: 'Test Post',
      body: 'Test Body',
    };
    expect(component.isActivePost(component.activePost)).toBeTrue();
  });
});
