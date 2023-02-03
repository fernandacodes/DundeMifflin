import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  baseUrl = "http://localhost:3001/user"
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
  readUser():Observable<User>{
    const id = this.route.snapshot.paramMap.get("userId");
    const url = `${this.baseUrl}/${id}`
    return this.http.get<User>(url)
  }
  ngOnInit(): void {
    this.readUser().subscribe(user=>{
      this.user = user
    })
  }
  update(user:User):Observable<User>{
    const id = this.route.snapshot.paramMap.get("id");
    const url = `${this.baseUrl}/${id}`
    return this.http.put<User>(url, user)
  }
  userUpdate():void{
    const baseurl = "products"
    const id = this.route.snapshot.paramMap.get("id");
    const url = `/${id}/${baseurl}`
    this.update(this.user).subscribe(()=>{
      this.router.navigate([url])
    })
  }
}
