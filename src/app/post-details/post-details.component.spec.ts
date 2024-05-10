import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import {
  increment,
  reset,
  setId,
} from '../reducers/post-list/post-list.action';
import {
  selectCount,
  selectId,
} from '../reducers/post-list/post-list.selectors';
import { Post, PostDetailsComponent } from './post-details.component';

describe('PostDetailsComponent', () => {
  let component: PostDetailsComponent;
  let fixture: ComponentFixture<PostDetailsComponent>;
  let store: any;
  let mockIdObservable: any;
  let mockCountObservable: any;

  beforeEach(async () => {
    mockIdObservable = of(123);
    mockCountObservable = of(1);

    const storeMock = {
      select: jasmine.createSpy().and.callFake((selector) => {
        if (selector === selectCount) {
          return mockCountObservable;
        } else if (selector === selectId) {
          return mockIdObservable;
        }
      }),
      dispatch: jasmine.createSpy('dispatch'),
    };

    await TestBed.configureTestingModule({
      imports: [CommonModule, StoreModule.forRoot({}), PostDetailsComponent],
      providers: [{ provide: Store, useValue: storeMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(PostDetailsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    component.post = {
      userId: 1,
      id: 123,
      title: 'Test Post',
      body: 'Test Body',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set currentLabel based on post input on ngOnInit', () => {
    component.ngOnInit();
    expect(component.currentLabel).toEqual([
      'Test Post',
      '123',
      '1',
      'Test Body',
    ]);
  });

  describe('togglePostDetails', () => {
    it('should dispatch setId action', () => {
      component.togglePostDetails();
      expect(store.dispatch).toHaveBeenCalledWith(setId({ id: 123 }));
    });

    it('should handle id change and dispatch appropriate actions', () => {
      component.togglePostDetails();
      mockIdObservable.subscribe((id: number) => {
        if (id === component.post.id) {
          expect(store.dispatch).toHaveBeenCalledWith(increment());
        } else if (id !== component.post.id && id !== 0) {
          expect(store.dispatch).toHaveBeenCalledWith(reset());
        }
      });
    });
  });
});
