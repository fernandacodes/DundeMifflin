import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Pedido } from '../pedido.model';
import { Product } from '../product.model';
import { User } from '../user.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  pedido:Pedido = {
    id_user: 0,
    id_produto: 0,
    preco_produto: 0,
    cidade: '',
    quantidade: 0,
    titular_cartao: '',
    numero_cartao: '',
    cvv: '',
    validade: '',
    nome_pedido: '',
    destinatario: '',
  }
  product:Product = {
    product_name: '',
    product_price: 0,
    product_quant: 0
  }
  user:User = {
    email: '',
    senha: '',
    nome: '',
    telefone: '',
    sobrenome: '',
    cpf: '',
    cidade: ''
  }
  baseUrl = "http://localhost:3001/pedidos"
  constructor(private router:Router, private route:ActivatedRoute, private http:HttpClient){
  }
  readById(id:string):Observable<Product>{
    const baseurl = "http://localhost:3001/products"
    const url = `${baseurl}/${id}`
    return this.http.get<Product>(url)
  }
  readByUserId(userId:string):Observable<User>{
    const baseurl = "http://localhost:3001/user"
    const url = `${baseurl}/${userId}`
    return this.http.get<User>(url)
  }
  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get("userId")||'';
    const id = this.route.snapshot.paramMap.get('productId')||'';
    this.readById(id).subscribe(product =>{
      this.product = product;
    })
    this.readByUserId(userId).subscribe(user=>{
      this.user = user;
    })
  }
  create(pedido:Pedido):Observable<Pedido>{
    return this.http.post<Pedido>(this.baseUrl, pedido)
  }
  createPedido():void{
    const userId = this.route.snapshot.paramMap.get("userId");
    const url = `/${userId}/products`;
    this.pedido.id_produto = this.product.id || 0
    this.pedido.id_user = this.user.id || 0
    this.pedido.nome_pedido = this.product.product_name
    this.pedido.cidade = this.user.cidade
    this.pedido.destinatario = this.user.nome
    this.pedido.preco_produto = this.product.product_price
    this.create(this.pedido).subscribe(()=>{
      this.router.navigate([url])
    })
  }
}
