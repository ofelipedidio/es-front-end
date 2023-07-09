import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MentoresModel } from "./mentores-model";

const baseurl = "http://localhost:8080/api/mentors";

@Injectable({
  providedIn: "root",
})
export class MentoresService {
  constructor(private http: HttpClient) {}

  getMentores(): Observable<Mentors[]> {
    return this.http.get<Mentors[]>(baseurl);
  }
}

export interface Mentors {
  nome: String;
  cargo: String;
  tags: String[];
}
