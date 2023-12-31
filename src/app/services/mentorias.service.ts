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
  getMentoriasByName(name: String) {
    return this.http.get<MentoriaInterface[]>(baseurl + '?name=' + name);
  }
  createMentoria(mentoria: MentoriaModel): Observable<any> {
    return this.http.post(baseurl, mentoria);
  }
  updateMentoriaStatus(id: String, status: String) {
    const jsonStatus = {"status": status}; 
    return this.http.put(baseurl + '/' + id, jsonStatus);
  }
  updateMentoriaName(id: String, isMentee: boolean) {
    var jsonName = {}; 

    if (isMentee) { 
      jsonName = {"mentorado": "<Usuário Deletado>"};  
    } else {
      jsonName = {"mentor": "<Usuário Deletado>"};  
    };

    
    return this.http.put(baseurl + '/' + id, jsonName);
  }

  updateRatingMentor(id: String, rating: number) {
    const jsonRating = {"rating_mentor" : rating}
    return this.http.put(baseurl + '/' + id, jsonRating);
  }

  updateRatingMentorado(id: String, rating: number) {
    const jsonRating = {"rating_mentorado" : rating}
    return this.http.put(baseurl + '/' + id, jsonRating);
  }
}
