
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { User } from "firebase";
import { Observable } from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courseTrain';
  user$ : Observable <User>;
  constructor( private afAuth : AngularFireAuth ){

     this.user$ = afAuth.authState;

  }
  login(){
    this.afAuth.auth.signInWithRedirect( new auth.GoogleAuthProvider() );
  }
  logout(){
    this.afAuth.auth.signOut();
  }
}
