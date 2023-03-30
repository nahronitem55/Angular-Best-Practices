import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestApi1Service } from '@app/services/testApi/test-api1.service';
import { TestUser } from '@app/test-user.model';

@Component({
  selector: 'app-presentation-logic',
  templateUrl: './presentation-logic.component.html',
  styleUrls: ['./presentation-logic.component.css']
})
export class PresentationLogicComponent implements OnInit {

  constructor(private httpClient: HttpClient, private myApi: TestApi1Service) { 
    this.user = new TestUser(1,"Orhan","Metin","orhanmet@outlook.com");
  }
  user! :TestUser;

  ngOnInit(): void {
    this.myApi.getUser().subscribe(data => {
      this.user = data;
    });
  }

}
