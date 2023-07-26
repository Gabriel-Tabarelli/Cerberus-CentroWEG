import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathBar } from 'src/app/interfaces/PathBar';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css']
})

export class BarraNavegacaoComponent implements OnInit {

  constructor(private route: Router) {}
  ngOnInit(): void {
  }
  
  @Input()
  links!: PathBar[];


  last(tipo: string, index: number): string {
    const isLastLink = index >= this.links.length - 1;
    return `${tipo}-${isLastLink ? 'ultima' : 'normal'}`;
  }

  navigateTo(link: PathBar, index: number) {
     if (index == 0) {
      this.route.navigate(['/home-page'])
    } else {
      this.route.navigate([link.link])
    }
  }
}
