export type Quarto = {
  id?: number;
  nomeQuarto: string;
  descricao: string;
  imagens: Array<string>;
  valorNominal?: number;
  valorTotalTaxas?: number;
  tarifasPorNoite?: Array<TarifaPorNoite>;
  maximoPessoas?: number;

};

type TarifaPorNoite = {
  dia: string;
  valorTarifa: number;
}
