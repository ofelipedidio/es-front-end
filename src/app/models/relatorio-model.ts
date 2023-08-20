export class RelatorioModel implements Relatorio {
    qtd_usuario: number; 
    qtd_mentorias: number; 
    taxa_mentorias: number; 
    qtd_experiencias: number; 
    qtd_abs_experiencias: number;

    constructor(
        qtd_usuario: number,
    qtd_mentorias: number,
    taxa_mentorias: number, 
    qtd_experiencias: number, 
    qtd_abs_experiencias: number,
    ) {
        this.qtd_usuario = qtd_usuario;
        this.qtd_mentorias = qtd_mentorias;
        this.taxa_mentorias = taxa_mentorias;
        this.qtd_experiencias = qtd_experiencias;
        this.qtd_abs_experiencias = qtd_abs_experiencias;
    }

    static convertPayload(relatorio: Relatorio): RelatorioModel[] {
        const relatorios: RelatorioModel[] = [];
            relatorios.push(new RelatorioModel(relatorio.qtd_usuario, relatorio.qtd_mentorias, 
            relatorio.taxa_mentorias, relatorio.qtd_experiencias, relatorio.qtd_abs_experiencias));
        return relatorios;
      }
}

export interface Relatorio {
    qtd_usuario: number; 
    qtd_mentorias: number; 
    taxa_mentorias: number; 
    qtd_experiencias: number; 
    qtd_abs_experiencias: number;
}
