import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from "./in-memory-data.service";

import { AppComponent } from './app.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import {TodoService} from "./todo-service";
import { DashboardComponent } from './dashboard/dashboard.component';
import {routing} from "./app-routing/app-routing.module";
import { TodoSearchComponent } from './todo-search/todo-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [// View Classes components, directives, and pipes.
    AppComponent,
    TodoDetailComponent,
    DashboardComponent,
    TodoSearchComponent
  ],
  //creators of service
  providers: [TodoService],//Defines the set of injectable objects that are available in the injector of module.
  //main page
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }
