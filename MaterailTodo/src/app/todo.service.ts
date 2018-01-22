import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import {Todo} from "./todo";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {

  private todoesUrl = 'api/todoes';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getTodoes(): Promise<Todo[]>{
    return this.http.get(this.todoesUrl)
      .toPromise()
      .then(res => res.json().data as Todo[])
      .catch(this.handleError);
  }

  getTodo(id: number): Promise<Todo>{
    const url = `${this.todoesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().data as Todo)
      .catch(this.handleError);
  }

  update(todo: Todo): Promise<Todo>{
    const url = `${this.todoesUrl}/${todo.id}`;
    return this.http
      .put(url,JSON.stringify(todo),{headers: this.headers})
      .toPromise()
      .then(()=>todo)
      .catch(this.handleError);
  }

  create(title: string): Promise<Todo>{
    return this.http
      .post(this.todoesUrl,JSON.stringify({
        title: title,
        completed: false,
        createDate: Date.now()
      }),{headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Todo)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void>{
    const url = `${this.todoesUrl}/${id}`;
    return this.http.delete(url,{headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred",error);
    return Promise.reject(error.message || error);
  }
}
