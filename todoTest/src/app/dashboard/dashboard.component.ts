import { Component, OnInit } from '@angular/core';
import {Todo} from "../model/Todo";
import {TodoService} from "../todo-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  todoes: Todo[] = [];

  selectedTodo: Todo;

  constructor(
    private router: Router,
    private todoService: TodoService
  ) { }


  ngOnInit() {
    this.todoService.getTodoes()
      .then(todoes => this.todoes = todoes);
  }

  gotoDetail(): void{
    this.router.navigate(['detail',this.selectedTodo.id]);
  }

  onSelect(todo: Todo){
    this.selectedTodo = todo;
  }

  add(message: string){
    message = message.trim();
    if(!name){
      return;
    }
    this.todoService.create(message)
      .then(todo => {
          this.todoes.push(todo);
          this.selectedTodo = null;
      });
  }

  delete(todo: Todo){
    this.todoService
      .delete(todo.id)
      .then(() => {
        this.todoes = this.todoes.filter(t => t !== todo);
        if(this.selectedTodo === todo){
          this.selectedTodo = null;
        }
      })
  }
}
