import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"",redirectTo:"/home", pathMatch:"full"},
  {path:"bookmarks", component:BookmarksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
