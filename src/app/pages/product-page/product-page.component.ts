import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PathBar} from 'src/app/interfaces/PathBar';
import { Product } from 'src/app/interfaces/Product';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute) { }
  
  ngAfterViewInit(): void {
    window.scrollTo(0,0)
  }

  links: PathBar[] = [
    {link:"/home-page", nomeLink: "home"},
    {link:"/category-page", nomeLink: "motores elétricos"},
    {link:"/category-page", nomeLink: "W22"}];

product: Product;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    console.log(id);
    this.product = {
    id : 1,
    productName :  "W22",
    url :  "https://static.weg.net/medias/images/h39/hf5/BRASIL_W22_Plus_Premium_225_355_IE3_B3Dnew_1200Wx1200H.jpg",
    description :  " Com carcaça de ferro fundido, flexibilidade de forma construtiva, pés maciços e inteiriços e níveis de ruído e temperatura de operação reduzidos, os motores W22 Alta Tensão são perfeitamente adequados para as mais diversas aplicações industriais.",
    category :  2,
    specificationList : [] 
    }
  }
}
