import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserArticlesComponent } from './user-articles/user-articles.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user.component';

const routes: Routes = [{ path: '', component: UserComponent },
{
  path: "user-profile",
  component: UserProfileComponent
},
{
  path: "user-articles",
  component: UserArticlesComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
