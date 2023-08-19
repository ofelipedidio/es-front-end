import { UserInterface, UserModel } from "./user-model";
export class MentorModel implements MentorInterface {
  tags: String[];
  cargo: String;
  first_name: String;
  last_name: String;
  isMentor = true;
  isMentee = false;
  email: String;
  _id: String;
  token: String = "";
  password: String = "";
  constructor(
    first_name: String,
    last_name: String,
    tags: String[],
    email: String,
    id: String,
    mentor: MentorProperty
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.tags = mentor?.tags;
    this.email = email;
    this._id = id;
    this.mentor = mentor;
    this.cargo = mentor?.cargo;
  }
  mentor: MentorProperty;
  static convertPayload(mentoresPayload: MentorInterface[]): MentorModel[] {
    const mentores: MentorModel[] = [];
    mentoresPayload.forEach((mentor) => {
      mentores.push(
        new MentorModel(
          mentor.first_name,
          mentor.last_name,
          mentor.tags,
          mentor.email,
          mentor._id,
          mentor.mentor
        )
      );
    });
    return mentores;
  }
}

export interface MentorInterface extends UserInterface {
  mentor: MentorProperty;
}

interface MentorProperty {
  tags: String[];
  cargo: String;
}
