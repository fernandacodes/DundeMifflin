import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product.model';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent {
  product: Product = {
    product_name:'',
    product_price:0,
    product_quant:0
  }
  products!: Product[]
  baseUrl = "http://localhost:3001/products"
  constructor(private http: HttpClient) {
  }
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
  ngOnInit() {
    this.read().subscribe((products) => {
      this.products = products
    })
  }
}
