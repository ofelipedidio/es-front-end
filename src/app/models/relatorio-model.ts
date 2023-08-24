export class RelatorioModel implements Relatorio {
  qtdUsuario: number;
  qtdMentorias: number;
  taxaMentorias: number;
  qtdExperiencias: number;
  qtdAbsExperiencias: number;

  constructor(
    qtd_usuario: number,
    qtd_mentorias: number,
    taxa_mentorias: number,
    qtd_experiencias: number,
    qtd_abs_experiencias: number
  ) {
    this.qtdUsuario = qtd_usuario;
    this.qtdMentorias = qtd_mentorias;
    this.taxaMentorias = taxa_mentorias;
    this.qtdExperiencias = qtd_experiencias;
    this.qtdAbsExperiencias = qtd_abs_experiencias;
  }

  static convertPayload(relatorio: Relatorio): RelatorioModel[] {
    const relatorios: RelatorioModel[] = [];
    relatorios.push(
      new RelatorioModel(
        relatorio.qtdUsuario,
        relatorio.qtdMentorias,
        relatorio.taxaMentorias,
        relatorio.qtdExperiencias,
        relatorio.qtdAbsExperiencias
      )
    );
    return relatorios;
  }
}

export interface Relatorio {
  qtdUsuario: number;
  qtdMentorias: number;
  taxaMentorias: number;
  qtdExperiencias: number;
  qtdAbsExperiencias: number;
}
