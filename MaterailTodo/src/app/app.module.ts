import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {MdCheckboxModule, MdInputModule, MdListModule, MdToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import 'hammerjs';
import { TodoListComponent } from './todo-list/todo-list.component';
import {TodoService} from "./todo.service";
import {routing} from "./app-routing/app-routing.module";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryService} from "./in-memory.service";
import {HttpModule} from "@angular/http";
import { TodoSearchComponent } from './todo-search/todo-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MdInputModule,
    MdListModule,
    MdCheckboxModule,
    MdToolbarModule,
    BrowserAnimationsModule,
    routing,
    //Always import the InMemoryWebApiModule after
    // the HttpModule to ensure that the XHRBackend
    // provider of the InMemoryWebApiModule supersedes
    // all others.
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryService),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
