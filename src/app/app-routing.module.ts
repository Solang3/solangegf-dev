import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogPostDetailComponent } from './components/blog-post-detail/blog-post-detail.component';

const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: 'post/:id', component: BlogPostDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
