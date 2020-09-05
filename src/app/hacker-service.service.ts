import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bookmarks } from './bookmarks'

const API_URL = 'https://hacker-news.firebaseio.com/v0';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class HackerServiceService {
  constructor(private http:HttpClient) { }

  getHackerUserApi(): Observable<any> {
    return this.http.get(API_URL + '/topstories.json', { responseType: 'json' });
  }

  getApiResult(id:any): Observable<any> {
    return this.http.get(`${API_URL + '/item'}/${id + '.json'}`, { responseType: 'json' });
  }

  getComment(id:any): Observable<any> {
    return this.http.get(`${API_URL + '/item'}/${id + '.json'}`, { responseType: 'json' });
  }

  public addToBookmark(news) {
    window.sessionStorage.setItem(news.id, JSON.stringify(news));
  }

  public getBookmark(id) {
    return JSON.parse(sessionStorage.getItem(id));
  }

}
