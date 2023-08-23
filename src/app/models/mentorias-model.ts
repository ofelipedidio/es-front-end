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
  rating_mentor: number;
  rating_mentorado: number;
  constructor(_id: String, mentor: String, mentorado: String, duracao: String, formato: String, recompensa: String, 
    mentor_email: String, mentorado_email: String, status: String, rating_mentor: number, rating_mentorado: number) {
    this._id = _id;
    this.mentor = mentor;
    this.mentorado = mentorado;
    this.duracao = duracao;
    this.formato = formato;
    this.recompensa = recompensa;
    this.mentor_email = mentor_email;
    this.mentorado_email = mentorado_email;
    this.status = status;
    this.rating_mentor = rating_mentor;
    this.rating_mentorado = rating_mentorado;
  }
  static convertPayload(mentoriasPayload: MentoriaInterface[]): MentoriaModel[] {
    const mentorias: MentoriaModel[] = [];
    mentoriasPayload.forEach((mentoria) => {
      mentorias.push(new MentoriaModel(mentoria._id, mentoria.mentor, mentoria.mentorado, 
        mentoria.duracao, mentoria.formato, mentoria.recompensa, mentoria.mentor_email,
        mentoria.mentorado_email, mentoria.status, mentoria.rating_mentor, mentoria.rating_mentorado));
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
  status: String,
  rating_mentor: number,
  rating_mentorado: number,
}
