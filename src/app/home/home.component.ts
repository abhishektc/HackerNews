import { Component, OnInit } from '@angular/core';
import { HackerServiceService } from '../hacker-service.service';
import { Bookmarks } from '../bookmarks';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hackerApi: any = {};
  result:any=[];
  public lengt:any;
  notscrolly:boolean=false;
  getD:boolean = false;
  noMoreData:boolean = true;
  spinner:boolean = false;
  spinner1:boolean = false;
  totalBookmarks:any;
  title:string ="";
  urld:SafeUrl;
  showFrame:boolean = false;
  textApi:string;

  saveUser:Bookmarks = {};

  constructor(private hacKerService:HackerServiceService,private dom:DomSanitizer) { }

  ngOnInit(): void {
    this.totalBookmarks = sessionStorage.length;
    this.spinner1 = true;
    this.hacKerService.getHackerUserApi().subscribe(
      data => {
        this.hackerApi = data;
        this.lengt = this.hackerApi.length;
        for (let i = 0; i < 10; i++) {
          const id=this.hackerApi[i];
          this.hacKerService.getApiResult(id).subscribe(
              data =>{
                this.spinner1 = false;
                this.result.push(data);
              }
          );          
        }
        this.notscrolly = true;
      },
      err => {
        console.log(err);
      }
    );

  }
  onScroll(){
    if(this.notscrolly && this.noMoreData){
      this.spinner = true;
      this.notscrolly = false;
      this.loadNext10Api();
    }
    
  }

  loadNext10Api(){
    const lastPost = this.result.length;
    let tpost;
    if(lastPost + 10 < this.lengt){
      tpost = lastPost + 10;
    }else{
      const diff = this.lengt - lastPost;
      tpost = lastPost + diff;
    }
    if(lastPost < this.lengt){
      for (let j = lastPost; j < tpost; j++) {
        
        const id=this.hackerApi[j];
          this.hacKerService.getApiResult(id).subscribe(
            data =>{
              this.spinner = false;
              this.result.push(data);
            },
            err =>{
              console.log("Failed");
            }
        );     
      }
      setTimeout(() => {
        this.notscrolly = true;
      }, 1000);
      

    } else {
      this.spinner = false;
      this.noMoreData = false;
    }
  }

  addBookmarks(id:any,title:any,by:any,url:any){
      this.saveUser.id = id;
      this.saveUser.title = title;
      this.saveUser.authorName = by;
      this.saveUser.url = url;
      if(this.hacKerService.getBookmark(id) == null){
        this.hacKerService.addToBookmark(this.saveUser);
        this.totalBookmarks = sessionStorage.length;
        alert("Added to Bookamarks Successfully")
      }else{
        alert("Already Exist");
      }
      
  }

  displayArticles(title,urls){
    this.title = title;
      this.showFrame = true;
      this.urld = this.dom.bypassSecurityTrustResourceUrl(urls);
  }
  displayArticlesText(title,text){
    this.showFrame = false
    this.title = title;
    this.textApi = text;
  }

  closeModel(){
    this.urld = this.dom.bypassSecurityTrustResourceUrl('');
  }

}
