import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-ordered-page',
  templateUrl: './ordered-page.component.html',
  styleUrls: ['./ordered-page.component.css']
})
export class OrderedPageComponent implements OnInit {

  constructor(private sessionService: SessionStorageService,
    private requestService: RequestService) { }

  ngOnInit(): void {
    this.id = this.sessionService.getItem('usuario').id;
    this.buscarPedidos();
  }

  id: number;
  page: number = 0;
  last: false;

  listaDePedidos: any[] = []

  ngAfterViewInit(): void {
    window.scrollTo(0, 0)
  }

  mostrarMais() {
    this.page ++;
    this.buscarPedidos();
  }

  filtroSelecionado: string = 'desc';

  onFiltroChange(event: any) {
    if (!this.last) {
      this.filtroSelecionado = event.target.value;
      this.listaDePedidos = [];
      this.page = 0;
      this.buscarPedidos();
    } else {
      this.listaDePedidos.reverse()
    }
  }

  buscarPedidos(){
    this.requestService.findSomeRequest(this.id, this.page, this.filtroSelecionado).subscribe((data: any) => {
     this.listaDePedidos = this.listaDePedidos.concat(data.content);
      this.last = data.last;
    })
  }
}
