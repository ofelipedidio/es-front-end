import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MentoriaInterface, MentoriaModel } from "../models/mentorias-model";
import { UserService } from "./user.service";

const baseurl = "/api/mentorias";

@Injectable({
  providedIn: "root",
})
export class MentoriasService {
  constructor(private http: HttpClient) {}

  getMentorias(user: UserService): Observable<MentoriaInterface[]> {
    return this.http.get<MentoriaInterface[]>(baseurl + '?email=' + user.getUser()?.email);
  }
  createMentoria(mentoria: MentoriaModel): Observable<any> {
    return this.http.post(baseurl, mentoria);
  }
}
