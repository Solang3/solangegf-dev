import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { NavComponent } from './nav/nav.component';
import { StripHtmlPipe } from './strip-html.pipe';
import { ContentfulService } from './services/contentful.service';
import { BlogPostDetailComponent } from './blog-post-detail/blog-post-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    NavComponent,
    StripHtmlPipe,
    BlogPostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
