import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-search-page',
  templateUrl: './advanced-search-page.component.html',
  styleUrls: ['./advanced-search-page.component.css']
})
export class AdvancedSearchPageComponent implements OnInit {

  tensao_de_alimentacao: number;
  frequencia_da_rede: number;
  tipo_da_partida: string;
  acoplamento: string = 'Direto';
  relacao_de_transmissao: number;
  altitude: number;
  temperatura_ambiente: number;
  rotacao_da_carga: number;
  inercia_estimada_da_carga: number;
  conjugado_nominal_da_carga: number;
  
  isRelacaoTransmissaoEnabled: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelectAcoplamentoChange(): void {
    this.isRelacaoTransmissaoEnabled = this.acoplamento === 'Engrenagem';
  }

}
