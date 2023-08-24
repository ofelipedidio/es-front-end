import { TagProperty, UserInterface, UserModel } from "./../models/user-model";
import { MentoresHomeComponent } from "./../mentores/mentores-home/mentores-home.component";
import { LoginModel } from "./../models/login-model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TagModel } from "../models/tag";

const baseurl = "/api/tags/";
@Injectable({
  providedIn: "root",
})
export class TagsServiceService {
  constructor(private http: HttpClient) {}

  sendTag(registrationInfo: TagModel): Observable<TagProperty> {
    return this.http.post<TagProperty>(baseurl + "register", registrationInfo);
  }

  deleteTag(tagDeleted: TagModel): Observable<TagProperty> {
    return this.http.post<TagProperty>(baseurl + "deleting", tagDeleted);
  }

  acceptTag(tagaccepted: TagModel): Observable<TagProperty> {
    return this.http.post<TagProperty>(baseurl + "treat", tagaccepted);
  }

  getUntreatedTags(): Observable<TagProperty[]> {
    return this.http.get<TagProperty[]>(baseurl + "findAllUn");
  }

  getAllTreatedTags(): Observable<TagProperty[]> {
      return this.http.get<TagProperty[]>(
          baseurl + 'findAll'
      );
  }
}
