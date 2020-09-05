import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HackerServiceService } from './hacker-service.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommentsComponent } from './home/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookmarksComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule,
    InfiniteScrollModule,
    MatProgressSpinnerModule,

  ],
  providers: [HackerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
