import { AdminProductsComponent } from './comps/admin-products/admin-products.component';
import { ProfileComponent } from './comps/profile/profile.component';
import { LoginComponent } from './comps/login/login.component';
import { HomeComponent } from './comps/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService } from './sers/authguard.service';
import { ProductFormComponent } from './comps/product-form/product-form.component';

const routes: Routes = [
  { path: "home" , component : HomeComponent , canActivate: [ AuthguardService ] },
  { path : "login" , component: LoginComponent },
  { path: "profile" , component : ProfileComponent , canActivate: [ AuthguardService ] },
  { path: "admin-products" , component : AdminProductsComponent , canActivate: [ AuthguardService ] },
  { path: "admin-products/new" , component : ProductFormComponent , canActivate: [ AuthguardService ] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
