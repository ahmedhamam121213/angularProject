import { AuthService } from './sers/auth.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courseTrain';
 
  constructor( private authSer : AuthService ){

    

  }
  login(){
    this.authSer.login();
  }
  logout(){
    this.authSer.logout();
  }
}
