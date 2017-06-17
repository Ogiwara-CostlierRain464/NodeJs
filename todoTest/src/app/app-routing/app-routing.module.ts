import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {TodoDetailComponent} from "../todo-detail/todo-detail.component";
import {AppComponent} from "../app.component";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: TodoDetailComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
