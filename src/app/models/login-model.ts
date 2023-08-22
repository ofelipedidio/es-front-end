export class LoginModel implements Login {
  email: String;
  password: String;
  isMentor: boolean;
  isMentee: boolean;
  isAdmin: boolean;

  constructor(
    email: String,
    password: String,
    isMentor: boolean,
    isMentee: boolean,
    isAdmin: boolean
  ) {
    this.email = email;
    this.password = password;
    this.isMentor = isMentor;
    this.isMentee = isMentee;
    this.isAdmin = isAdmin;
  }
}

export interface Login {
  email: String;
  password: String;
  isMentor: boolean;
  isMentee: boolean;
  isAdmin: boolean;
}
