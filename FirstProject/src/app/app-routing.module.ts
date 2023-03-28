import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { PresentationLogicComponent } from './presentation-logic/presentation-logic.component';
import { SubscribeExComponent } from './subscribe-ex/subscribe-ex.component';

const routes: Routes = [
  {
    path: "asayfasi",
    component: AComponent
  },
  {
    path: "bsayfasi",
    component: BComponent
  },
  {
    path: "subscribeSayfasi",
    component: SubscribeExComponent
  },
  {
    path: "presentationLogicSayfasi",
    component: PresentationLogicComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
