import { UserInterface, UserModel } from "./../models/user-model";
import { LoginModel } from "./../models/login-model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const baseurl = "/api/";
@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(loginInfo: LoginModel): Observable<UserInterface> {
    return this.http.post<UserInterface>(baseurl + "login", loginInfo);
  }

  register(registrationInfo: UserModel): Observable<UserInterface> {
    return this.http.post<UserInterface>(
      baseurl + "register",
      registrationInfo
    );
  }
}
