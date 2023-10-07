// blog-post.model.ts
export class BlogPost {
  id: number = 0;
  title!: {
    rendered: string;
  };
  content!: {
    rendered: string;
  };
  excerpt!: {
    rendered: string;
  };
  date!: Date;
  categories!: number[];

  constructor() {
    // Add any other initialization logic as needed
  }
}
