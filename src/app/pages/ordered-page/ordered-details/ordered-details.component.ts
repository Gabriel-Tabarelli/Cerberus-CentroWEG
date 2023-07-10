import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-ordered-details',
  templateUrl: './ordered-details.component.html',
  styleUrls: ['./ordered-details.component.css']
})
export class OrderedDetailsComponent implements OnInit {

  constructor(private routeSnap: ActivatedRoute) { }
  listaDeProdutos: Product[] = [
    {
      id: 3,
      productName: "Quadro distribuição QDW02-12-BE",
      url: "https://static.weg.net/medias/images/h44/h17/WDC_QDW02_12_BE_1200Wx1200H.jpg",
      description: "A linha de Quadros de Distribuição QDW, traz a seu lar a qualidade, confiabilidade e tradição da marca WEG, já reconhecidas nas instalações elétricas industrias.",
      category: 2,
      specificationList: ["	Modelo:	QDW02	",
        "	Cor da tampa:	Branca	",
        "	Material Base:	Plástico	",
        "	Material da tampa:	Plástico	",
        "	Quantidade de disjuntores no quadro:	12	",
        "	Forma de instalação:	De embutir, com tampa	",
        "	Componente principal do quadro:	Minidisjuntores	"
      ],
      commentList: []
    },
    {
      id: 4,
      productName: "Motores de Indução Trifásicos Refrigerado por Manto d’água",
      url: "https://static.weg.net/medias/images/he3/hcb/MKT_WEN_IMAGE_WGM_IC71W_B3T_1200Wx1200H.jpg",
      description: "Os motores da linha WGM20 são compactos e foram desenvolvidos para atender as mais diversas aplicações. São aptos a operar em ambientes confinados e agressivos, que necessitam baixo nível de ruído e mínima dissipação térmica para o ambiente. Possuem sistema de canais de refrigeração, que facilita a inspeção e limpeza, reduzindo os custos com manutenção.",
      category: 2,
      specificationList: [
        "	Fator de serviço:	 1.0	",
        "	Refrigeração:	 IC71W	",
        "	Tensão:	 400 a 4.160 V	",
        "	Número de polos:	 4 a 8	",
        "	Classe de isolamento:	 F	",
        "	Frequência:	 50 ou 60 Hz	",
        "	Carcaça:	 355 a 560 (IEC)	",
        "	Potência	:	 200 a 2.800 kW	",
        "	Grau de proteção:	 IP55 e IP56	",
        "	Forma construtiva:	 horizontal ou vertical	"
      ],
      commentList: []
    },
    {
      id: 5,
      productName: "Motores Síncronos - Linha S",
      url: "https://static.weg.net/medias/images/hb3/h29/MKT_WEN_IMAGE_MOTOR_SINCRONO_1200Wx1200H.jpg",
      description: "Os motores síncronos são aplicados onde são exigidos a correção do fator de potência, altos torques e baixas correntes de partida, velocidade constante em variações de carga, com baixo custo de operação e manutenção.",
      category: 2,
      specificationList: [
        "	Potência:	 até 110.000 kW	",
        "	Carcaça:	 280 a 1800 (IEC)	",
        "	Tensão:	 220 a 13.800 V	",
        "	Grau de Proteção:	 IP23 a IP56W/IP65W	",
        "	Rotação:	 3.600 a 150 rpm	"
      ],
      commentList: []
    }


  ]
  ngOnInit(): void {
    const id = this.routeSnap.snapshot.paramMap.get("id")
    console.log(id) // Buscar mais detalhes como, todos os produtos, data, etc, no banco com base no id
    this.pedido.id = Number(id)
    const dateString = this.pedido.data;
    const dateParts = dateString.split('-'); // Dividir a string da data em partes: [ano, mês, dia]
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];

    const formattedDate = `${day}/${month}/${year}`;
    console.log(formattedDate)
    this.pedido.data = formattedDate;
  }

  pedido = {
    id: 1,
    data: "2021-05-20",
    status: "Em andamento",
    produtos: [this.listaDeProdutos]
  }

  ngAfterViewInit(): void {
    window.scrollTo(0, 0)
  }

}
