import { MentorProperty, UserInterface, UserModel } from "./user-model";
export class MentorModel implements MentorInterface {
  tags: String[];
  cargo: String;
  isMentor = true;
  isMentee = false;
  isAdmin = false;
  email: String;
  phone: String;
  _id: String;
  token: String = "";
  password: String = "";
  constructor(
    name: String,
    birthDate: Date,
    tags: String[],
    email: String,
    phone: String,
    id: String,
    mentor: MentorProperty
  ) {
      this.tags = tags;
    this.name = name;
    this.birthDate = birthDate;
    this.tags = mentor?.tags;
    this.email = email;
    this._id = id;
    this.mentor = mentor;
    this.cargo = mentor?.cargo;
    this.phone = phone;
  }
  clone(): UserModel {
    return { ...this };
  }
  name: String;
  birthDate: Date;
  mentor: MentorProperty;
  static convertPayload(mentoresPayload: MentorInterface[]): MentorModel[] {
    const mentores: MentorModel[] = [];
    mentoresPayload.forEach((mentor) => {
      console.log(mentor.mentor);
      mentores.push(
        new MentorModel(
          mentor.name,
          mentor.birthDate,
          mentor.tags,
          mentor.email,
          mentor.phone,
          mentor._id,
          mentor.mentor
        )
      );
    });
    return mentores;
  }
}

export interface MentorInterface extends UserInterface {}
