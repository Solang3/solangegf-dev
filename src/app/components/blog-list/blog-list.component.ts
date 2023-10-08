// blog-list.component.ts
import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../models/blog-post.model';
import { BlogPostService } from '../../services/blog-post.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.less']
})
export class BlogListComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  categories: any[] = [];
  arePostsLoaded = false; // Initialize as false

  constructor(private blogPostService: BlogPostService, private http: HttpClient) {}

  ngOnInit(): void {
    this.blogPostService.getBlogPosts().subscribe((posts) => {
      this.blogPosts = posts;
      this.fetchCategories();
      this.arePostsLoaded = true; // Set to true when posts are loaded
    });
  }

  fetchCategories() {
    this.http.get<any[]>('https://uat.mercadodesemillas.com/wp-json/wp/v2/categories').subscribe((data) => {
      this.categories = data;
    });
  }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find((cat) => cat.id === categoryId);
    return category ? category.name : 'Development';
  }
}
