import { Injectable } from '@angular/core';
import { Http, Headers, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class TodosService {

  constructor(private _http: Http) { }

  getAllTodos(): Promise<any> {
      return this._http.get('api/todos')
      .toPromise()
        .then( todos => {
          todos = todos.json();
          return todos;
        });
    }
}
