import { UserInterface } from "./../models/user-model";
import { Injectable } from "@angular/core";

const STORED_USER_DATA_KEY = "userData";
@Injectable({
  providedIn: "root",
})
export class UserService {
  private currentUser: UserInterface | undefined;

  setUser(user: UserInterface) {
    this.currentUser = user;
    localStorage.setItem(
      STORED_USER_DATA_KEY,
      JSON.stringify(this.currentUser)
    );
  }

  getUser() {
    if (!this.currentUser) {
      const storedData = localStorage.getItem(STORED_USER_DATA_KEY);
      if (storedData) {
        this.currentUser = JSON.parse(storedData);
      }
    }
    return this.currentUser;
  }

  clearUser() {
    this.currentUser = undefined;
    localStorage.removeItem(STORED_USER_DATA_KEY);
  }
}
