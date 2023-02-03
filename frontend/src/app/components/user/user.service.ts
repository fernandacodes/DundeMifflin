import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.model';
@Injectable({
    providedIn:'root'
})
export class UserService{
    baseUrl =  "http://localhost:3001/user"
    constructor(private http:HttpClient){
    }
    create(user:User):Observable<User>{
        return this.http.post<User>(this.baseUrl,user)
    }
    read():Observable<User[]>{
        return this.http.get<User[]>(this.baseUrl)
    }
}