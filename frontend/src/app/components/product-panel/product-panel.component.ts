import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Product} from '../product.model';
@Component({
  selector: 'app-product-panel',
  templateUrl: './product-panel.component.html',
  styleUrls: ['./product-panel.component.css']
})
export class ProductPanelComponent {
  baseUrl = "http://localhost:3001/products"
  product:Product = {
    product_name: '',
    product_price: 0,
    product_quant:0,
  }
  constructor(private http:HttpClient, private router:Router){
  }
  createP(p:Product):Observable<Product>{
    return this.http.post<Product>(this.baseUrl,p)
  }
  createProduct():void{
    this.createP(this.product).subscribe(()=>{
      console.log("cadastrado!")
      this.router.navigate(["/adm"])
    })
  }
}

