import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { map } from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  path;
  route;
 

  constructor( private auth: AuthService , private router : Router ) { }
  canActivate(){
    return this.auth.user$.pipe( map ( user => {
      if(user){
        return true;
        
      }else{
        console.log("home as anomynous");
        return false;
        

      }
    } ) )
  }
}
