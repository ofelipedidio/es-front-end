import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MentorInterface, MentorModel } from "../models/mentores-model";

const baseurl = "http://localhost:8080/api/mentors";

@Injectable({
  providedIn: "root",
})
export class MentoresService {
  constructor(private http: HttpClient) {}

  getMentores(): Observable<MentorInterface[]> {
    return this.http.get<MentorInterface[]>(baseurl);
  }
  createMentor(mentor: MentorModel): Observable<any> {
    return this.http.post(baseurl, mentor);
  }
}
