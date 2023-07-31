export class LoginModel implements Login {
  email: String;
  password: String;
  isMentor: boolean;
  isMentee: boolean;

  constructor(
    email: String,
    password: String,
    isMentor: boolean,
    isMentee: boolean
  ) {
    this.email = email;
    this.password = password;
    this.isMentor = isMentor;
    this.isMentee = isMentee;
  }
}

export interface Login {
  email: String;
  password: String;
  isMentor: boolean;
  isMentee: boolean;
}
