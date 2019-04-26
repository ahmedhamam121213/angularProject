import { SaveCatService } from './../../sers/save-cat.service';
import { CategoriesService } from './../../sers/categories.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories;
  constructor( private catSrv : CategoriesService , private savCatSrv : SaveCatService , private router:Router ) { 
    this.categories = this.catSrv.getCategories();
   }

  ngOnInit() {
  }

  save(product){
    this.savCatSrv.saveCat(product);
    this.router.navigate(['/admin-products']);

  }
  

}
