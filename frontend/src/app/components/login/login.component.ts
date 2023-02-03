import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  baseUrl = '/products'
  user: User = {
    email: '',
    senha: '',
    cidade: '',
    sobrenome: '',
    cpf: '',
    nome: '',
    telefone: '',
  }
  adm = 'maiara@icomp.ufam.edu.br'
  senhaadm = '123'
  element: User = {
    email: '',
    senha: '',
    cidade: '',
    sobrenome: '',
    cpf: '',
    nome: '',
    telefone: '',
  }
  users!: User[];
  constructor(private userservice: UserService, private router: Router) {
  }
  verificar(): void {
    this.userservice.read().subscribe(users => {
      this.users = users;
      users.forEach((element) => {
        if (this.user.email == this.adm && this.user.senha == this.senhaadm) {
          this.router.navigate(['/adm'])
        }
        else if (element.email == this.user.email && element.senha == this.user.senha) {
          const userId = element.id
          const baseurl = "products"
          const url = `${userId}/${baseurl}`
          this.router.navigate([url])
        }
      })
    })
  }
}
