import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "../app.component";
import {TodoListComponent} from "../todo-list/todo-list.component";

const routes: Routes = [
  {path: '',component: AppComponent},
  {path: 'todoList',component: TodoListComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
