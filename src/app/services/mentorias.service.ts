import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MentoriaInterface, MentoriaModel } from "../models/mentorias-model";

const baseurl = "http://localhost:8080/api/mentors/mentorias";

@Injectable({
  providedIn: "root",
})
export class MentoriasService {
  constructor(private http: HttpClient) {}

  getMentorias(): Observable<MentoriaInterface[]> {
    return this.http.get<MentoriaInterface[]>(baseurl);
  }
  createMentoria(mentoria: MentoriaModel): Observable<any> {
    return this.http.post(baseurl, mentoria);
  }
}
