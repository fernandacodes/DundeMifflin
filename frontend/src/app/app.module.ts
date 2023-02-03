import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule}from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { AdmComponent } from './components/adm/adm.component';
import { ProductComponent } from './components/product/product.component';
import { ProductPanelComponent } from './components/product-panel/product-panel.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdmProfileComponent } from './components/adm-profile/adm-profile.component';
import { MeusPedidosComponent } from './components/meus-pedidos/meus-pedidos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavComponent,
    LoginComponent,
    CadastrarComponent,
    AdmComponent,
    ProductComponent,
    ProductPanelComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ProfileComponent,
    AdmProfileComponent,
    MeusPedidosComponent,
    PedidosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
