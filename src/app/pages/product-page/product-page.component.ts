import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PathBar } from 'src/app/interfaces/PathBar';
import { Product } from 'src/app/interfaces/Product';
import { CartService } from 'src/app/services/cart.service';
import { UserStatusService } from 'src/app/services/user-state.service';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit, AfterViewInit {


  constructor(private routeSnap: ActivatedRoute,
    private userStatusService: UserStatusService,
    private router: Router,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.userStatusService.userLoggedIn$.subscribe((logado) => {
      this.usuarioLogado = logado;
    });

    const id = this.routeSnap.snapshot.paramMap.get("id")
    console.log(id);

    // Produto sem mais informações
    this.product = {
      id: 1,
      productName: "W22",
      url: "https://static.weg.net/medias/images/h39/hf5/BRASIL_W22_Plus_Premium_225_355_IE3_B3Dnew_1200Wx1200H.jpg",
      description: " Com carcaça de ferro fundido, flexibilidade de forma construtiva, pés maciços e inteiriços e níveis de ruído e temperatura de operação reduzidos, os motores W22 Alta Tensão são perfeitamente adequados para as mais diversas aplicações industriais.",
      category: 2,
      specificationList: []
    }

    // Produto com informações adicionais
    // this.product = {
    // id : 2,
    // productName :  "Aerogeradores",
    // url :  "https://static.weg.net/medias/images/h3b/hb7/MKT_WEN_IMAGE_WIND2_AGW147_1200Wx1200H.jpg",
    // description :  "Os aerogeradores possuem controle passivo e ângulo de passo fixo (controle por estol) e rotação variável do rotor, com um gerador síncrono de ímãs permanentes e acoplado direto no rotor, sem a necessidade de um multiplicador de velocidade. Todas as funções dos aerogeradores são monitoradas e controladas por uma unidade de controle, baseada em microprocessadores instalados no painel de comando e controle da turbina.",
    // category :  2,
    // specificationList : ["Modelo: AGW147 / 4.2"
    // ,"Potência nominal: 4.200 kW "
    // ,"Classe de vento (IEC): S (Vref = 9,0 m/s / Iref = 0,14 / Ve50 = 52,5 m/s)"
    // ,"Tensão de saída: 34,5 kV"
    // ,"Diâmetro do rotor: 147 m"
    // ,"Altura do cubo (hub): 125 m "
    // ,"Gerador síncrono de ímãs permanentes"
    // ,"Acoplamento mecânico: direto (sem caixa de engrenagem)"
    // ,"Conexão à rede: conversor de potência plena"] 
    // }

  }

  ngAfterViewInit(): void {
    window.scrollTo(0, 0)
  }

  links: PathBar[] = [
    { link: "/home-page", nomeLink: "home" },
    { link: "/category-page", nomeLink: "motores elétricos" },
    { link: "/category-page", nomeLink: "W22" }
  ];

  product: Product;
  usuarioLogado: boolean;



  moreInfo: boolean = false;

  openMoreInfo() {
    this.moreInfo = !this.moreInfo
  }


  adicionarAoCarrinho() {
    if (this.usuarioLogado) {
      this.cartService.addToCart(this.product)
      console.log("Adicionou")
    } else {
      this.router.navigate(['/signin-page'], { queryParams: { returnUrl: '/product-page/:' + this.product.productName } });
    }
  }
}
