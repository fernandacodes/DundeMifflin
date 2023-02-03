import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../pedido.model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit{
  pedidos!:Pedido[]
  pedido:Pedido={
    nome_pedido: '',
    id_user: 0,
    id_produto: 0,
    preco_produto: 0,
    cidade: '',
    quantidade: 0,
    titular_cartao: '',
    numero_cartao: '',
    cvv: '',
    validade: '',
    destinatario: ''
  }
  constructor(private http:HttpClient){
  }
  baseUrl = "http://localhost:3001/pedidos"

  readPedidos():Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.baseUrl)
  }
  ngOnInit(): void {
    this.readPedidos().subscribe(pedidos=>{
      this.pedidos = pedidos
    })
  }
}
