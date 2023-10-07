// blog-list.component.ts
import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../models/blog-post.model';
import { BlogPostService } from '../../services/blog-post.service';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.less']
})
export class BlogListComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  categories: any[] = [];
  isPageVisible = false;

  constructor(private blogPostService: BlogPostService, private http: HttpClient, private router: Router) {
    // Subscribe to router events to control the visibility
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Navigation has started, trigger fade-out animation
        this.isPageVisible = false;
      } else if (event instanceof NavigationEnd) {
        // Navigation has ended, trigger fade-in animation
        this.isPageVisible = true;
      }
    });
  }

  ngOnInit(): void {
    this.blogPostService.getBlogPosts().subscribe((posts) => {
      this.blogPosts = posts;
      this.fetchCategories();
    });
  }

  fetchCategories() {
    this.http.get<any[]>('https://uat.mercadodesemillas.com/wp-json/wp/v2/categories').subscribe((data) => {
      this.categories = data;
    });
  }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find((cat) => cat.id === categoryId);
    return category ? category.name : 'Unknown';
  }
}
