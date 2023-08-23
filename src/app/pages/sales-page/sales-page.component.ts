import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-page',
  templateUrl: './sales-page.component.html',
  styleUrls: ['./sales-page.component.css']
})
export class SalesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.carregado = true;
    }, 2000);
  }
  carregado: boolean = false;

}
