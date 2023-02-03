import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from './user.service';
import {Product} from  '../product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  baseUrl = "http://localhost:3001/products"
  products!:Product[]
  user:User = {
    email:'',
    senha:'',
    cidade:'',
    nome:'',
    telefone:'',
    sobrenome:'',
    cpf:'',
  }
  userId!:Route
  constructor(private userService:UserService, private http:HttpClient, private route:ActivatedRoute, private router:Router){
  }
  readProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }
  ngOnInit(){
    this.readProducts().subscribe(products=>{
      this.products = products
    })
  }
  goToProduto(productId?:Number):void{
    const userId = this.route.snapshot.paramMap.get("userId")
    const url = `/produto/${userId}/${productId}`
    this.router.navigate([url])
  }
}
