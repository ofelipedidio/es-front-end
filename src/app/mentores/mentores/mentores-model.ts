import { Mentors } from "./mentores-service.service";
export class MentoresModel {
  nome: String | undefined;
  cargo: String | undefined;
  tags: String[] | undefined;
  constructor(nome: String, cargo: String, tags: String[]) {
    this.nome = nome;
    this.cargo = cargo;
    this.tags = tags;
  }
  static convertPayload(mentoresPayload: Mentors[]): MentoresModel[] {
    const mentores: MentoresModel[] = [];
    mentoresPayload.forEach((mentor) => {
      mentores.push(new MentoresModel(mentor.nome, mentor.cargo, mentor.tags));
    });
    return mentores;
  }
}
