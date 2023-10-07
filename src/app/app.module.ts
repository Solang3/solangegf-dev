import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { NavComponent } from './components/nav/nav.component';
import { StripHtmlPipe } from './strip-html.pipe';
import { BlogPostDetailComponent } from './components/blog-post-detail/blog-post-detail.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    NavComponent,
    StripHtmlPipe,
    BlogPostDetailComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
