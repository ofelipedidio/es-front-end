import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const baseurl = "http://localhost:8080/api/mentors";

@Injectable({
  providedIn: "root",
})
export class MenteeService {
  constructor(private http: HttpClient) {}
}
