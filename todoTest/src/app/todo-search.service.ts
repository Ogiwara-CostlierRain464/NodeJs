import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Todo} from "./model/Todo";

@Injectable()
export class TodoSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Todo[]> {
    return this.http
      .get(`app/todoes/?message=${term}`)
      .map(response => response.json().data as Todo[]);
  }
}
