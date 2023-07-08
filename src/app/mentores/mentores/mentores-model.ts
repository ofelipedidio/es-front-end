export class MentoresModel {
  name: String | undefined;
  cargo: String | undefined;
  tags: String[] | undefined;
  constructor(name: String, cargo: String, tags: String[]) {
    this.name = name;
    this.cargo = cargo;
    this.tags = tags;
  }
}
