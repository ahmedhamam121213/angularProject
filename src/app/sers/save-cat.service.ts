import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveCatService {

  constructor( private db : AngularFireDatabase ) { }

  saveCat(product){
    this.db.list('/products').push(product);
    
  }
}
