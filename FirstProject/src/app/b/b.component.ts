import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Observable, delay, Subject, takeUntil } from 'rxjs';
import {environment } from "@src/environments/environment";
@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit, OnDestroy {


  constructor(private httpClient: HttpClient) { }
  ngOnDestroy(): void {
    this.unscribeSubject.next(this.users);
    this.unscribeSubject.complete();
  }
  users: any[] = [];
  unscribeSubject = new Subject();
  ngOnInit(): void {
    console.log(environment.baseUrl);
    this.httpClient.get<any[]>(environment.baseUrl+"/users")
      .pipe(delay(5000),takeUntil(this.unscribeSubject))
      .subscribe(data => {
      this.users = data;
    });
  }

}
