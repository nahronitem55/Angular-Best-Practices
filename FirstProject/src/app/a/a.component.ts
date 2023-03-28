import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from "rxjs";

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  users: Observable<any[]> | undefined;
  ngOnInit(): void {
    this.users = this.httpClient.get<any[]>("https://jsonplaceholder.typicode.com/users").pipe(delay(5000));
  }

}
