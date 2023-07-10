import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordered-page',
  templateUrl: './ordered-page.component.html',
  styleUrls: ['./ordered-page.component.css']
})
export class OrderedPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
    ,
    {
      id: 71463,
      data: '01/01/2021',
      status: 'Aguardando Pagamento'
    }
    ,
    {
      id: 23425,
      data: '01/01/2021',
      status: 'Aguardando Pagamento'
    }
  ]

  ngAfterViewInit(): void {
    window.scrollTo(0, 0)
  }
}
