import { Component, OnInit, Input } from '@angular/core';
import { HackerServiceService } from 'src/app/hacker-service.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  comments:any;

  allComments:any = [];
  loadCom:boolean = true;
  showComm:boolean = false;
  showMore:boolean = true;
  noData:boolean = false;
  constructor(private hackerService:HackerServiceService) { }

  ngOnInit(): void {

  }

  loadComments(){
   
      if(this.comments.length > 0){
        for (let i = 0; i < 2; i++) {
          if(this.comments.length == i){
            this.showMore = false;
            this.noData = true;
          }
          if(i == 2){
            break;
          }
          this.hackerService.getComment(this.comments[i]).subscribe(
            data =>{
              this.allComments.push(data);
            }
          );
          
        }
      }
    
    this.loadCom = false;
    this.showComm = true;

  }
  showMoreComments(){
    const lpost =  this.allComments.length;
    const npost =  lpost + 2;
    if(this.comments.length === lpost){
      this.showMore = false;
      this.noData = true;
    }else{
      for (let i = lpost; i < npost; i++) {
      
      this.hackerService.getComment(this.comments[i]).subscribe(
        data =>{
          this.allComments.push(data);
        }
      );
      if(this.comments.length === lpost + 1 ){
        this.showMore = false;
        this.noData = true;
        break;
      }
        
      
    }
    }
    
  }

}
