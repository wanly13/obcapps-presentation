import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private SERVER = API_ENDPOINT;
  
  constructor(
    public http: HttpClient
  ) { }
  getComments(){
    return this.http.get(this.SERVER + '/comments');
  }
}
