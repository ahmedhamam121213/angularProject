import { UserService } from './sers/user.service';
import { AuthService } from './sers/auth.service';

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courseTrain';
 
  constructor( private authSer : AuthService ,
      private route : ActivatedRoute ,
       private router : Router,
       private userSrv : UserService ){

    this.authSer.user$.subscribe( user => {
      if( user ){
        this.userSrv.save(user);
        // let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        // router.navigateByUrl(returnUrl);
      }
    } )

  }
  login(){
    this.authSer.login();
  }
  logout(){
    this.authSer.logout();
  }
}
