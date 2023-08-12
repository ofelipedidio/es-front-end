export class UserModel implements UserInterface {
  email: String;
  id: String;
  token: String;
  first_name: String;
  last_name: String;
  isMentor: boolean;
  isMentee: boolean;
  password: String;
  tags: String[] = [];

  constructor(
    email: String,
    id: String,
    token: String,
    first_name: String,
    last_name: String,
    isMentor: boolean,
    isMentee: boolean,
    password: String,
    tags?: String[]
  ) {
    this.email = email;
    this.id = id;
    this.token = token;
    this.first_name = first_name;
    this.last_name = last_name;
    this.isMentee = isMentee;
    this.isMentor = isMentor;
    this.password = password;
    this.tags = tags ? tags : [];
  }
}

export interface UserInterface {
  first_name: String;
  last_name: String;
  isMentor: boolean;
  isMentee: boolean;
  email: String;
  id: String;
  token: String;
  password: String;
  tags: String[];
}
