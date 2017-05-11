import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { PostsComponent } from './screens/posts/posts.component';
import { PostsService } from './models/posts.service';
import { TodosService } from './models/todos.service';
import { TodosComponent } from './screens/todos/todos.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PostsService, TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
