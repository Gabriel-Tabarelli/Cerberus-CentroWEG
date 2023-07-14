import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/Product/Product';

@Component({
  selector: 'app-ordered-details',
  templateUrl: './ordered-details.component.html',
  styleUrls: ['./ordered-details.component.css']
})
export class OrderedDetailsComponent implements OnInit {

  constructor(private routeSnap: ActivatedRoute) { }
  listaDeProdutos: Product[] = [

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
