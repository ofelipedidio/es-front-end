export class UserModel implements UserInterface {
  email: String;
  id: String;
  token: String;

  constructor(email: String, id: String, token: String) {
    this.email = email;
    this.id = id;
    this.token = token;
  }
}

export interface UserInterface {
  email: String;
  id: String;
  token: String;
}
