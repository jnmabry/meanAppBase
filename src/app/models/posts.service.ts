import { Injectable } from '@angular/core';
import { Http, Headers, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostsService {

  constructor(private _http: Http) { }

  getAllPosts() {
    return this._http.get('api/posts')
    .toPromise()
      .then( posts => {
        posts = posts.json();
        return posts;
      });
  }

}
