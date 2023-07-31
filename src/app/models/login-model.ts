export class LoginModel implements Login {
  user: String;
  password: String;
  isMentor: boolean;
  isMentee: boolean;

  constructor(
    user: String,
    password: String,
    isMentor: boolean,
    isMentee: boolean
  ) {
    this.user = user;
    this.password = password;
    this.isMentor = isMentor;
    this.isMentee = isMentee;
  }
}

export interface Login {
  user: String;
  password: String;
  isMentor: boolean;
  isMentee: boolean;
}
