import { Injectable } from '@angular/core';
import { Client, IMessage, Stomp } from '@stomp/stompjs';
import { Observable } from 'rxjs';
import SockJS from 'sockjs-client';

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
  }

  ngOnInit(): void {

  }

  initializeWebSocketConnection(): void {
    const connect = () => {
      const socket = new SockJS(this.webSocketUrl);
      const stomp = Stomp.over(socket);
      stomp.connect({}, async () => {
        this.conexao = stomp;
        console.log('Conectado');

        //Inscrevendo nos tópicos temporariamente Fazer a incrições nos tópicos dinamicamente
        this.subscribeToAdmTopic((message: IMessage) => {
          const mensagemRecebida = JSON.parse(message.body);

          console.log("Mensagem recebida:", mensagemRecebida);
        });

        this.subscribeToTopic(1, (message: IMessage) => {
          const mensagemRecebida = JSON.parse(message.body);

          console.log("Retorno de comentário recebida:", mensagemRecebida);
        });

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
      listaRespostas: []
    }
    const message: string = JSON.stringify(question); // Revisar como enviar mensagem
    this.conexao.publish({ destination: destination, body: message });
  }

  answerMessage(idPergunta: number, resposta: string) {
    const destination = "/api/" + idPergunta + "/responder/1" ;
    const answer: any = {
      idPessoa: 1,
      resposta: resposta,
      idPergunta: idPergunta
    }
    const message: string = JSON.stringify(answer);
    this.conexao.publish({ destination: destination, body: message });
  }

  subscribeToTopic(idPessoa: number, callback: (message: IMessage) => void): void {
    console.log("Normal sht")
    if (this.conexao.connected) {
      const topic = "/topic/" + idPessoa;
      this.conexao.subscribe(topic, (message: IMessage) => { callback(message); }); // Revisar funcão de call back
    } else {
      console.log('Não conectado');
    }
  };

  subscribeToAdmTopic(callback: (message: IMessage) => void): void {
    console.log("ADMIn")
    if (this.conexao.connected) {
      const topic = "/topic/perguntas";
      this.conexao.subscribe(topic, (message: IMessage) => { callback(message); }); // Revisar funcão de call back
    } else {
      console.log('Não conectado');
    }
  };


}
