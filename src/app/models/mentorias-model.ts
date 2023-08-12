export class MentoriaModel implements MentoriaInterface {
  mentor: String;
  mentorado: String;
  duracao: String;
  formato: String;
  recompensa: String
  constructor(mentor: String, mentorado: String, duracao: String, formato: String, recompensa: String) {
    this.mentor = mentor;
    this.mentorado = mentorado;
    this.duracao = duracao;
    this.formato = formato;
    this.recompensa = recompensa;
  }
  static convertPayload(mentoriasPayload: MentoriaInterface[]): MentoriaModel[] {
    const mentorias: MentoriaModel[] = [];
    mentoriasPayload.forEach((mentoria) => {
      mentorias.push(new MentoriaModel(mentoria.mentor, mentoria.mentorado, 
        mentoria.duracao, mentoria.formato, mentoria.recompensa));
    });
    return mentorias;
  }
}

export interface MentoriaInterface {
  mentor: String,
  mentorado: String,
  duracao: String,
  formato: String,
  recompensa: String
}
