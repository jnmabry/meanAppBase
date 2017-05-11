import { Component, OnInit } from '@angular/core';
import { TodosService } from 'app/models/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  allTodos: any[] = [];

  constructor(private _todosService: TodosService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this._todosService.getAllTodos()
    .then( todos => {
      this.allTodos = todos;
      console.log(todos);
      console.log(this.allTodos);
      return todos;
    });
  }

}
