import { Injectable } from '@angular/core';
import { Client, IMessage, Stomp } from '@stomp/stompjs';
import { Observable } from 'rxjs';
import SockJS from 'sockjs-client';
import { Question } from 'src/app/interfaces/Question';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private webSocketUrl = 'http://localhost:8081/ws';
  messages$!: Observable<IMessage[]>;
  messageText: string = "";
  messagesArray: IMessage[] = [];
  conexao: Client = {} as Client;
  listaDeMensagens: string[] = [];

  constructor() { 
    this.initializeWebSocketConnection();
    // this.subscribeToTopic(1);
    // Buscar no banco todos os tópicos aos quais o usuário está inscrito e se inscrever neles

  }

  ngOnInit(): void {
    // this.initializeWebSocketConnection();
    // this.subscribeToTopic(1);
  }

  initializeWebSocketConnection(): void {
    const connect = () => {
      const socket = new SockJS(this.webSocketUrl);
      const stomp = Stomp.over(socket);
      stomp.connect({}, async () => {
        this.conexao = stomp;
        console.log('Conectado');
      }, (erro: any) => {
        console.log('Erro ao conectar', erro);
        setTimeout(() => {
          console.log('Tentando reconectar...');
          connect();
        }, 5000);
      });
    };
    connect();
  }

  sendMessage(idProd: number, pergunta: string): void {
    const destination = "/api/" + idProd + "/perguntar";
    const question: any = {
      idPessoa: 1,
      pergunta: pergunta,
      listaRespostas : []
    }
    const message: string = JSON.stringify(question); // Revisar como enviar mensagem
    this.conexao.publish({ destination: destination, body: message });
  }

  subscribeToTopic(idProd: number, callback: (message: IMessage) => void): void{
    if (this.conexao.connected) {
      const topic = "/topic/" + idProd;
      this.conexao.subscribe(topic, (message: IMessage) => { callback(message);}); // Revisar funcão de call back
    } else {
      console.log('Não conectado');
    }
  };
}
