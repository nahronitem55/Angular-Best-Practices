import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RolEkleComponent } from './rol-ekle/rol-ekle.component';
import { RolGuncelleComponent } from './rol-guncelle/rol-guncelle.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    AdminComponent,
    RolEkleComponent,
    RolGuncelleComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
