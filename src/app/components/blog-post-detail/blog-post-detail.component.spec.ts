import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostDetailComponent } from './blog-post-detail.component';

describe('BlogPostDetailComponent', () => {
  let component: BlogPostDetailComponent;
  let fixture: ComponentFixture<BlogPostDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPostDetailComponent]
    });
    fixture = TestBed.createComponent(BlogPostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
