import { Component, OnInit } from '@angular/core';
import {TodoSearchService} from "../todo-search.service";
import {Observable} from "rxjs/Observable";
import {Todo} from "../model/Todo";
import {Subject} from "rxjs/Subject";
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
  //This is one way to tell Angular that the component's
  // constructor requires a HeroService so it can
  // get the list of heroes to display.
  providers: [TodoSearchService]
})
export class TodoSearchComponent implements OnInit {

  todoes: Observable<Todo[]>;

  // producer of an observable event stream
  private searchTerms = new Subject<string>();

  constructor(
    private todoSearchService: TodoSearchService,
    private router: Router
  ) { }

  ngOnInit() {
    this.todoes = this.searchTerms
      .debounceTime(30)  //wait 300ms after each
      .distinctUntilChanged() //ignore if next search term is same as previous
      .switchMap(term => term ? this.todoSearchService.search(term) : Observable.of<Todo[]>([]))
      .catch(error => {
          console.log(error);
          return Observable.of<Todo[]>([]);
      });

  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  gotoDetail(todo: Todo): void {
    let link = ['/detail',todo.id];
    this.router.navigate(link);
  }
}
