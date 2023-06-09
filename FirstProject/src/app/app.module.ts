import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { MyTestComponent } from './my-test/my-test.component';
import { MypipePipe } from './mypipe.pipe';
import { HttpClientModule } from "@angular/common/http";
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { SubscribeExComponent } from './subscribe-ex/subscribe-ex.component';
import { PresentationLogicComponent } from './presentation-logic/presentation-logic.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MyTestComponent,
    MypipePipe,
    AComponent,
    BComponent,
    SubscribeExComponent,
    PresentationLogicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
