import { LoginComponent } from './comps/login/login.component';
import { HomeComponent } from './comps/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService } from './sers/authguard.service';

const routes: Routes = [
  { path: "home" , component : HomeComponent , canActivate: [ AuthguardService ] },
  { path : "login" , component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
