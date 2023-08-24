import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MentorInterface, MentorModel } from "../models/mentores-model";

const baseurl = "/api/mentors";

@Injectable({
  providedIn: "root",
})
export class MentoresService {
  constructor(private http: HttpClient) {}

  getMentores(): Observable<MentorInterface[]> {
    return this.http.get<MentorInterface[]>(baseurl);
  }
}
