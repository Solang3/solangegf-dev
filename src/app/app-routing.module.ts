import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogPostDetailComponent } from './components/blog-post-detail/blog-post-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'blog', component: BlogListComponent, data: { animation: 'BlogList' }  },
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } },
  { path: 'post/:id', component: BlogPostDetailComponent, data: { animation: 'BlogDetail' }  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
