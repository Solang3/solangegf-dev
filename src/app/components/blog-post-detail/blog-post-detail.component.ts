import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostService } from '../../services/blog-post.service';
import { BlogPost } from '../../models/blog-post.model';

@Component({
  selector: 'app-blog-post-detail',
  templateUrl: './blog-post-detail.component.html',
  styleUrls: ['./blog-post-detail.component.less'],
})
export class BlogPostDetailComponent implements OnInit {
  blogPost: BlogPost | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogPostService: BlogPostService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const postId = +params['id'];
      this.blogPostService.getBlogPostById(postId).subscribe((post) => {
        this.blogPost = post;
      });
    });
  }
}
