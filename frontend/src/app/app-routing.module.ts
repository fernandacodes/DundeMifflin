import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../app/components/login/login.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import {UserComponent} from './components/user/user.component';
import {AdmComponent}from './components/adm/adm.component'
import {ProductPanelComponent}from '../app/components/product-panel/product-panel.component'
import {ProductUpdateComponent}from './components/product-update/product-update.component'
import {ProductDeleteComponent} from  './components/product-delete/product-delete.component'
import {ProfileComponent } from './components/profile/profile.component';
import { ProductComponent } from './components/product/product.component';
import { AdmProfileComponent } from './components/adm-profile/adm-profile.component';
import { MeusPedidosComponent } from './components/meus-pedidos/meus-pedidos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

const routes: Routes = [{
  path:"",
  component:LoginComponent
},
{
  path: ":userId/products",
  component:UserComponent
},
{
  path:"product-update/:id",
  component:ProductUpdateComponent
},
{
  path:"product-delete/:id",
  component:ProductDeleteComponent
},
{
  path:"cadastrar",
  component:CadastrarComponent
},{
  path:"adm",
  component:AdmComponent

},{
  path:"product-panel",
  component:ProductPanelComponent
},
{
  path:":userId/profile",
  component:ProfileComponent
},
{
  path:"produto/:userId/:productId",
  component:ProductComponent
},
{
  path:"adm/adm-profile",
  component:AdmProfileComponent
},
{
  path:"meuspedidos/:userId",
  component:MeusPedidosComponent
},
{
  path:"pedidos",
  component:PedidosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
