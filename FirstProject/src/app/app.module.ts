import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { MyTestComponent } from './my-test/my-test.component';
import { MypipePipe } from './mypipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MyTestComponent,
    MypipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
