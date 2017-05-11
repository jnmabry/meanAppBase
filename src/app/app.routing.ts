import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Screens
import { PostsComponent } from './screens/posts/posts.component';
import { TodosComponent } from './screens/todos/todos.component';


export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent, pathMatch: 'full'},
  { path: 'todos', component: TodosComponent, pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);