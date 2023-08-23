import { Injectable } from "@angular/core";

export class UserModel implements UserInterface {
  email: String;
  _id: String;
  token: String;
  name: String;
  birthDate: Date;
  isMentor: boolean;
  isMentee: boolean;
  password: String;
  tags: String[] = [];
  cargo: String = "";
  isAdmin: boolean;

  constructor(
    email: String,
    id: String,
    token: String,
    name: String,
    birthDate: Date,
    isMentor: boolean,
    isMentee: boolean,
    password: String,
    mentor?: MentorProperty,
    tags?: String[],
    cargo?: String,
    isAdmin: boolean = false
  ) {
    this.mentor = mentor ? mentor : { tags: [], cargo: "" };
    this.email = email;
    this._id = id;
    this.token = token;
    this.name = name;
    this.birthDate = birthDate;
    this.isMentee = isMentee;
    this.isMentor = isMentor;
    this.password = password;
    this.tags = tags ? tags : [];
    this.cargo = cargo ? cargo : "";
    this.isAdmin = isAdmin;
  }
  mentor: MentorProperty;

  clone(): UserModel {
    return { ...this };
  }
}

export interface UserInterface {
  name: String;
  birthDate: Date;
  isMentor: boolean;
  isMentee: boolean;
  isAdmin: boolean;
  email: String;
  _id: String;
  token: String;
  password: String;
  mentor: MentorProperty;
  tags: String[];
  cargo: String;
  clone(): UserModel;
}

export interface MentorProperty {
  tags: String[];
  cargo: String;
}

export interface TagProperty {
  tagName: String;
  treated: boolean;
}
