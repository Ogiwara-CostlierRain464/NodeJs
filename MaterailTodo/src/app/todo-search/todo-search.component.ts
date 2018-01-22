import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Todo} from "../todo";
import {Subject} from "rxjs/Subject";
import {TodoSearchService} from "../todo-search.service";
import {Router} from "@angular/router";

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css'],
  providers: [TodoSearchService]
})
export class TodoSearchComponent implements OnInit {

  todoes: Observable<Todo[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private todoSearchService: TodoSearchService,
    private router: Router
  ) { }

  ngOnInit() {
    this.todoes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(title => title ? this.todoSearchService.search(title): Observable.of<Todo[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Todo[]>([]);
      });
  }

  search(title: string): void{
    this.searchTerms.next(title);
  }
}
