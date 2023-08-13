import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const baseurl = "/api/mentors";

@Injectable({
  providedIn: "root",
})
export class MenteeService {
  constructor(private http: HttpClient) {}
}
