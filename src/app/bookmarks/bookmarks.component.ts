import { Component, OnInit } from '@angular/core';
import { HackerServiceService } from '../hacker-service.service'
import { Bookmarks } from '../bookmarks';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})

export class BookmarksComponent implements OnInit {
  allBookamrk:any = [];
  data:any = [];
  constructor(private service:HackerServiceService) { }

  ngOnInit(): void {
    for (let i = 0; i < sessionStorage.length; i++) {
      this.allBookamrk.push(this.service.getBookmark(sessionStorage.key(i)));
    }
  }
  
  deletefromBookMark(id:any){
    sessionStorage.removeItem(id);
    for (let i = 0; i < this.allBookamrk.length; i++) {
      if(id === this.allBookamrk[i].id){
        this.allBookamrk.splice(i,1);
      }
    }
    alert("Removed Successfully");
  }

}
