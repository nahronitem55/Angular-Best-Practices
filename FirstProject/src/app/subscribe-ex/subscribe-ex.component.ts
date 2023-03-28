import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-subscribe-ex',
  templateUrl: './subscribe-ex.component.html',
  styleUrls: ['./subscribe-ex.component.css']
})
export class SubscribeExComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  user :any;
  ngOnInit(): void {
    /*this.httpClient.get<any>("https://jsonplaceholder.typicode.com/todos/1")
    .subscribe(data => {
      this.httpClient
      .get<any>("https://jsonplaceholder.typicode.com/users/"+data.userId)
      .subscribe(data => {
        this.user = data;
      })
    });*/

    this.httpClient.get<any>("https://jsonplaceholder.typicode.com/todos/1")
    .pipe(
      mergeMap(todo => 
        this.httpClient
        .get<any>(`https://jsonplaceholder.typicode.com/users/${todo.userId}`
        )
      )
    ).subscribe(data => {
        this.user = data;
    });
  }

}
