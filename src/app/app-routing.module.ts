import { HomeComponent } from './comps/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService } from './sers/authguard.service';

const routes: Routes = [
  { path: "home" , component : HomeComponent , canActivate: [ AuthguardService ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
