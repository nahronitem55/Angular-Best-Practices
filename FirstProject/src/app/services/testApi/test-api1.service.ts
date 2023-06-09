import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestUser } from '@app/test-user.model';
import { mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestApi1Service {

  constructor(private httpClient: HttpClient) { }

  getUser(){
    return this.httpClient.get<any>("https://jsonplaceholder.typicode.com/todos/1")
    .pipe(
      mergeMap(todo => 
        this.httpClient
        .get<TestUser>(`https://jsonplaceholder.typicode.com/users/${todo.userId}`
        )
      )
    );
  }
  
}
