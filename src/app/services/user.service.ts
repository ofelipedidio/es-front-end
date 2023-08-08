import { UserInterface } from "./../models/user-model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private currentUser: UserInterface | undefined;

  setUser(user: UserInterface) {
    this.currentUser = user;
  }

  getUser() {
    return this.currentUser;
  }

  clearUser() {
    this.currentUser = undefined;
  }
}
