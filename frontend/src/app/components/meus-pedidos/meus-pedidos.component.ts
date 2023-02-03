import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pedido } from '../pedido.model';
import { Product } from '../product.model';
import { User } from '../user.model';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.component.html',
  styleUrls: ['./meus-pedidos.component.css']
})
export class MeusPedidosComponent implements OnInit{
  users!:User[]
  meuspedidos: Pedido[] = [];
  products!:Product[]
  pedidos!:Pedido[]
  pedido:Pedido={
    nome_pedido: '',
    id_user:0,
    id_produto: 0,
    preco_produto: 0,
    cidade: '',
    quantidade: 0,
    titular_cartao: '',
    numero_cartao: '',
    cvv: '',
    validade: '',
    destinatario:''
  }
  constructor(private router:Router, private route:ActivatedRoute, private http:HttpClient){
  }
  readUsers():Observable<User[]>{
    const baseUrl = "http://localhost:3001/user"
    return this.http.get<User[]>(baseUrl)
  }
  readProducts():Observable<Product[]>{
    const baseUrl = "http://localhost:3001/products"
    return this.http.get<Product[]>(baseUrl)
  }
  readPedidos():Observable<Pedido[]>{
    const baseUrl = "http://localhost:3001/pedidos"
    return this.http.get<Pedido[]>(baseUrl)
  }
  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('userId')||'';
    var userId = parseInt(id)
    this.readProducts().subscribe(products =>{
      this.products = products
      
    })
    this.readUsers().subscribe(users =>{
      this.users = users
    })
    this.readPedidos().subscribe(pedidos=>{
      this.pedidos = pedidos
      pedidos.forEach(pedido => {
        if(pedido.id_user == userId){
          this.meuspedidos.push(pedido)
          console.log(this.meuspedidos)
        }
      })
    })
  }
}
