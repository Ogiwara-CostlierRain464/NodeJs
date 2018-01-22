import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TodoService} from "../todo.service";
import {Todo} from "../todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoes: Todo[] = [];

  constructor(
    private router: Router,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoService.getTodoes()
      .then(todoes => this.todoes = todoes);
  }


}
