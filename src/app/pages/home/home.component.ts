import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../../services/blog-post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent  implements OnInit {
  constructor(private blogPostService: BlogPostService) {}

  ngOnInit(): void {
    // Prefetch the blog posts when the home page loads
    this.blogPostService.getBlogPosts().subscribe((posts) => {
      // Store the fetched posts in a service or store for caching
      this.blogPostService.cacheBlogPosts(posts);
    });
  }
}
