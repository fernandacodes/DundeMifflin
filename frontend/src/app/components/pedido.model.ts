export interface Pedido{
    id?:number,
    nome_pedido:String,
    id_user:number,
    id_produto:number,
    preco_produto:number,
    cidade:string
    quantidade:number,
    titular_cartao:String,
    numero_cartao:String,
    cvv:String,
    validade:String,
    destinatario:String
}