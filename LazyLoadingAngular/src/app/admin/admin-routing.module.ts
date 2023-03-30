import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminComponent } from './admin.component';
import { RolEkleComponent } from './rol-ekle/rol-ekle.component';
import { RolGuncelleComponent } from './rol-guncelle/rol-guncelle.component';

const routes: Routes = [
  { path: '', component: AdminComponent },

  {
    path: "rol-ekle",
    component: RolEkleComponent
  },
  {
    path: "rol-guncelle",
    component: RolGuncelleComponent
  },
  {
    path: "add-user",
    component: AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
