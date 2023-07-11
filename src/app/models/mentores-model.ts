export class MentorModel implements MentorInterface {
  nome: String;
  cargo: String;
  tags: String[];
  constructor(nome: String, cargo: String, tags: String[]) {
    this.nome = nome;
    this.cargo = cargo;
    this.tags = tags;
  }
  static convertPayload(mentoresPayload: MentorInterface[]): MentorModel[] {
    const mentores: MentorModel[] = [];
    mentoresPayload.forEach((mentor) => {
      mentores.push(new MentorModel(mentor.nome, mentor.cargo, mentor.tags));
    });
    return mentores;
  }
}

export interface MentorInterface {
  nome: String;
  cargo: String;
  tags: String[];
}
