export class MentoriaModel implements MentoriaInterface {
  _id: String;
  mentor: String;
  mentorado: String;
  duracao: String;
  formato: String;
  recompensa: String;
  mentor_email: String;
  mentorado_email: String;
  status: String;
  constructor(_id: String, mentor: String, mentorado: String, duracao: String, formato: String, recompensa: String, 
    mentor_email: String, mentorado_email: String, status: String) {
    this._id = _id;
    this.mentor = mentor;
    this.mentorado = mentorado;
    this.duracao = duracao;
    this.formato = formato;
    this.recompensa = recompensa;
    this.mentor_email = mentor_email;
    this.mentorado_email = mentorado_email;
    this.status = status;
  }
  static convertPayload(mentoriasPayload: MentoriaInterface[]): MentoriaModel[] {
    const mentorias: MentoriaModel[] = [];
    mentoriasPayload.forEach((mentoria) => {
      mentorias.push(new MentoriaModel(mentoria._id, mentoria.mentor, mentoria.mentorado, 
        mentoria.duracao, mentoria.formato, mentoria.recompensa, mentoria.mentor_email,
        mentoria.mentorado_email, mentoria.status));
    });
    return mentorias;
  }
}

export interface MentoriaInterface {
  _id: String,
  mentor: String,
  mentorado: String,
  duracao: String,
  formato: String,
  recompensa: String
  mentor_email: String,
  mentorado_email: String,
  status: String
}
