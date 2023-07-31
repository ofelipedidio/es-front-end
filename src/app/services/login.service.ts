import { LoginModel } from './../models/login-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
const baseurl = "http://localhost:8080/api/login";
export class LoginService {

  constructor(private http: HttpClient) {}

  login(loginInfo:LoginModel):Observable<any>{
    return this.http.post(baseurl,loginInfo);
  }
}
