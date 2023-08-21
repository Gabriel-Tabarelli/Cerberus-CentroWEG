import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/Product/Product';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-ordered-details',
  templateUrl: './ordered-details.component.html',
  styleUrls: ['./ordered-details.component.css']
})
export class OrderedDetailsComponent implements OnInit {

  constructor(private routeSnap: ActivatedRoute,
    private requestService: RequestService,
    private router: Router) { }

  listaDeProdutos: Product[] = []

  ngOnInit(): void {
    const id = this.routeSnap.snapshot.paramMap.get("id");
    this.buscarPedido(id);
    
    this.pedido.id = Number(id)
    // const dateString = this.pedido.data;
    // const dateParts = dateString.split('-'); // Dividir a string da data em partes: [ano, mês, dia]
    // const year = dateParts[0];
    // const month = dateParts[1];
    // const day = dateParts[2];

    // const formattedDate = `${day}/${month}/${year}`;
    // console.log(formattedDate)
    // this.pedido.data = formattedDate;
  }

  pedido: any = {}

  ngAfterViewInit(): void {
    window.scrollTo(0, 0)
  }


  buscarPedido(id: any) {
    this.requestService.findOne(id).subscribe((data: any) => {
      this.pedido = data
      console.log(data)
      this.listaDeProdutos = this.pedido.produtos
    })
  }

  navegateTo(name: number) {
    this.router.navigate(["/product-page/" + name])
  }
}
