import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/Product';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private sessionService: SessionStorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.usuario = this.sessionService.getItem('usuario');
    this.userName = this.usuario.email
  }
  userName: string = '';
  usuario: any = {}


  listaDePedidos: any[] = [
    {
      id: 23233,
      data: '01/01/2021',
      status: 'Aguardando Pagamento'
    },
    {
      id: 14353,
      data: '01/01/2021',
      status: 'Aguardando Pagamento'
    },
    {
      id: 11213,
      data: '01/01/2021',
      status: 'Aguardando Pagamento'
    }
  ]

  listaDeProdutos: Product[] = [
    {
      id: 1,
      productName: "W22",
      url: "https://static.weg.net/medias/images/h39/hf5/BRASIL_W22_Plus_Premium_225_355_IE3_B3Dnew_1200Wx1200H.jpg",
      description: " Com carcaça de ferro fundido, flexibilidade de forma construtiva, pés maciços e inteiriços e níveis de ruído e temperatura de operação reduzidos, os motores W22 Alta Tensão são perfeitamente adequados para as mais diversas aplicações industriais.",
      category: 2,
      specificationList: [],
      commentList: []
    },
    {
        id: 2,
        productName: "Aerogeradores AGW147 / 4.2",
        url: "https://static.weg.net/medias/images/h3b/hb7/MKT_WEN_IMAGE_WIND2_AGW147_1200Wx1200H.jpg",
        description: "Os aerogeradores possuem controle passivo e ângulo de passo fixo (controle por estol) e rotação variável do rotor, com um gerador síncrono de ímãs permanentes e acoplado direto no rotor, sem a necessidade de um multiplicador de velocidade. Todas as funções dos aerogeradores são monitoradas e controladas por uma unidade de controle, baseada em microprocessadores instalados no painel de comando e controle da turbina.",
        category: 2,
        specificationList: ["Modelo: AGW147 / 4.2"
          , "Potência nominal: 4.200 kW "
          , "Classe de vento (IEC): S (Vref = 9,0 m/s / Iref = 0,14 / Ve50 = 52,5 m/s)"
          , "Tensão de saída: 34,5 kV"
          , "Diâmetro do rotor: 147 m"
          , "Altura do cubo (hub): 125 m "
          , "Gerador síncrono de ímãs permanentes"
          , "Acoplamento mecânico: direto (sem caixa de engrenagem)"
          , "Conexão à rede: conversor de potência plena"],
          commentList: []
    },
    {
        id: 3,
        productName: "Quadro distribuição QDW02-12-BE",
        url: "https://static.weg.net/medias/images/h44/h17/WDC_QDW02_12_BE_1200Wx1200H.jpg",
        description: "A linha de Quadros de Distribuição QDW, traz a seu lar a qualidade, confiabilidade e tradição da marca WEG, já reconhecidas nas instalações elétricas industrias.",
        category: 2,
        specificationList: ["	Modelo:	QDW02	"	,
        "	Cor da tampa:	Branca	"	,
        "	Material Base:	Plástico	"	,
        "	Material da tampa:	Plástico	"	,
        "	Quantidade de disjuntores no quadro:	12	"	,
        "	Forma de instalação:	De embutir, com tampa	"	,
        "	Componente principal do quadro:	Minidisjuntores	"	
        ],
        commentList: []
      }
  ]

  navigateTo(productName: string){
    const rotaProduto = "/product-page/" + encodeURIComponent(productName)
    this.router.navigate([rotaProduto])
  }
}
