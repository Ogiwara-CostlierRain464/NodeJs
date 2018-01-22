import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Todo} from "./todo";

@Injectable()
export class TodoSearchService {

  constructor(private http: Http) { }

  search(title: string): Observable<Todo[]>{
    return this.http
      .get(`app/todoes/?title=${title}`)
      .map(res => res.json().data as Todo[]);
  }
}
