import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  user:User={
    email:'',
    senha:'',
    cidade:'',
    nome:'',
    telefone:'',
    sobrenome:'',
    cpf:'',
  }
  constructor(private userService:UserService, private router:Router){
  }
  createUser():void{
    if(this.user.email == "" || this.user.senha == "" || this.user.cpf == "" || this.user.cidade == "" || this.user.telefone == "" || this.user.sobrenome == "" || this.user.nome == ""){
      alert("Há campos vazios no formulário")
    }else{
      this.userService.create(this.user).subscribe(()=>{
        this.router.navigate(['/adm'])
      })
    }
}
}
