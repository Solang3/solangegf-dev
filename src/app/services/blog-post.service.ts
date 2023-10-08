// blog-post.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  private apiUrl = 'https://uat.mercadodesemillas.com/wp-json/wp/v2/posts/';
  private cachedBlogPosts: BlogPost[] = [];

  constructor(private http: HttpClient) { }

    // Define a method to set or get cached blog posts
  cacheBlogPosts(posts: BlogPost[]): void {
    this.cachedBlogPosts = posts;
  }

  getCachedBlogPosts(): BlogPost[] {
    return this.cachedBlogPosts;
  }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.apiUrl);
  }

  getBlogPostById(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost>(this.apiUrl + id);
  }

}
