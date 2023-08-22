import { UserInterface } from "./../models/user-model";
import { Injectable } from "@angular/core";

const STORED_USER_DATA_KEY = "userData";
const STORED_USER_ROLE_KEY = "userRole";
@Injectable({
  providedIn: "root",
})
export class UserService {
  private currentUser: UserInterface | undefined;
  private currentRole: String | undefined;

  setUser(
    user: UserInterface,
    isMentor: boolean,
    isMentee: boolean,
    isAdmin: boolean = false
  ) {
    this.currentUser = user;
    this.currentRole = isMentor ? "MENTOR" : isAdmin ? "ADMIN" : "MENTORADO";
    this.setItem(STORED_USER_DATA_KEY, user);
    this.setItem(STORED_USER_ROLE_KEY, this.currentRole);
  }

  private setItem(key: string, object: any) {
    localStorage.setItem(key, JSON.stringify(object));
  }

  getUser() {
    this.fetchFromLocalStorage();
    return this.currentUser;
  }

  private getFromLocalStorage(key: string) {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : undefined;
  }

  private fetchFromLocalStorage() {
    if (!this.currentUser) {
      this.currentUser = this.getFromLocalStorage(STORED_USER_DATA_KEY);
      this.currentRole = this.getFromLocalStorage(STORED_USER_ROLE_KEY);
    }
  }

  getRole() {
    this.fetchFromLocalStorage();
    return this.currentRole;
  }

  clearUser() {
    this.currentUser = undefined;
    localStorage.removeItem(STORED_USER_DATA_KEY);
    localStorage.removeItem(STORED_USER_ROLE_KEY);
  }
}
