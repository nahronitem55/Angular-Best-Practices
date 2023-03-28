import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestApi1Service } from '@app/services/testApi/test-api1.service';
import { TestSrc } from '@src/test/test-src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'FirstProject';

  users: any[] = [];

  ngOnDestroy(): void {

  }
  ngOnInit(): void {
    this.httpClient.get<any[]>("https://jsonplaceholder.typicode.com/users").subscribe(data => {
      this.users = data;
    });
  }

  addUser() {
    this.httpClient.get<any[]>("https://jsonplaceholder.typicode.com/users").subscribe(data => {
      this.users = data;

      this.users.push({ name: "Orhan Metin" });
    });
  }

  trackByFn(index: number,item: any){
    return index;
  }

  constructor(private httpClient: HttpClient,testApi:TestApi1Service,testSrc:TestSrc) {

  }

}
