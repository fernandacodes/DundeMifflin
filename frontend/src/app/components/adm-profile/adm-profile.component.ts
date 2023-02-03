import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'app-adm-profile',
  templateUrl: './adm-profile.component.html',
  styleUrls: ['./adm-profile.component.css']
})
export class AdmProfileComponent {
  baseUrl = "http://localhost:3001/user/1"
  user:User = {
    email: '',
    senha: '',
    cpf: '',
    nome: '',
    telefone: '',
    sobrenome: '',
    cidade: ''
  }
  constructor(private route:ActivatedRoute, private http:HttpClient, private router:Router){
  }
  readUser(user:User):Observable<User>{
    return this.http.get<User>(this.baseUrl)
  }
  ngOnInit(): void {
    this.readUser(this.user).subscribe(user=>{
      this.user = user
      console.log()
    })
  }
  update(user:User):Observable<User>{
    this.baseUrl
    return this.http.put<User>(this.baseUrl, user)
  }
  userUpdate():void{
    this.update(this.user).subscribe(()=>{
      this.router.navigate(['/adm'])
    })
  }
}
