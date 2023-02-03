import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  baseUrl = "http://localhost:3001/products"
  product:Product = {
    product_name : '',
    product_price:0,
    product_quant:0,
  }
  constructor(private router:Router, private route:ActivatedRoute, private http:HttpClient){
  }
  readById(id:string):Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")||"";
    this.readById(id).subscribe(product=>{
      this.product = product
    });
  }
  cancel():void{
    this.router.navigate(['/adm'])
  }
  update(product:Product):Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }
  updateProduct():void{
    this.update(this.product).subscribe(()=>{
      this.router.navigate(['/adm'])
    })
  }
}
