import { CategoriesService } from './sers/categories.service';
import { AuthguardService } from './sers/authguard.service';
import { AuthService } from './sers/auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './comps/login/login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HomeComponent } from './comps/home/home.component';
import { ProfileComponent } from './comps/profile/profile.component';
import { AdminProductsComponent } from './comps/admin-products/admin-products.component';
import { ProductFormComponent } from './comps/product-form/product-form.component';
import { SaveCatService } from './sers/save-cat.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    AdminProductsComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [ AuthService,AuthguardService,CategoriesService,SaveCatService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
