import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {
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
  delete(product:Product):Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.delete<Product>(url)
  }
  deleteProduct():void{
    this.delete(this.product).subscribe(()=>{
      this.router.navigate(['/adm'])
    })
  }
}
