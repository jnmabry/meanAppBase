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

  createPost(postObject: any) {
    return this._http.post('api/posts', postObject, { headers: this.headers() })
      .toPromise()
      .then(re => { console.log(re.json()); return re.json() })
      .catch(e => { console.log(e.json()); return e.json() })
  }

  headers(): Headers {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

}