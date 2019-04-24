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
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [ AuthService,AuthguardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
