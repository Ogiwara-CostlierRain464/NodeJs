import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../model/Todo";
import {TodoService} from "../todo-service";
import {ActivatedRoute, Params} from "@angular/router";

import 'rxjs/add/operator/switchMap';//RX!

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html'
})
export class TodoDetailComponent implements OnInit {

  @Input() todo: Todo;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.todoService.getTodo(+params['id']))
      .subscribe(todo => this.todo = todo);
  }

  goBack(){
    window.history.back();
  }

  save(){
    this.todoService.update(this.todo)
      .then(()=>this.goBack());
  }
}
