import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  textNome:string = "Nome";
  textId:string = "CPF";
  boolean:boolean = true;

  // --Dados do Usuario-- //
  lista: user[] = [];
  //---
  nome:string;
  cpf:string;
  estado:string;
  cidade:string;
  bairro:string;
  endereco:string;
  numero:number;
  cep:string;
  telefone:number;
  nomeContato:string;
  email:string;
  senha:string;
  //---
  submit() {
    this.lista.push(new user(this.nome, this.cpf, this.estado, this.cidade, this.bairro, this.endereco, this.numero, this.cep, this.telefone, this.nomeContato, this.email, this.senha, !this.boolean))
    console.log(this.lista)
  }
  // --------end---------

  troca1(){
    if(this.boolean) {
      this.textNome = "Empresa"
      this.textId = "CNPJ";
      this.boolean = false;
    }
  }

  troca2(){
    if(!this.boolean) {
      this.textNome = "Nome"
      this.textId = "CPF";
      this.boolean = true;
    }
  }

}

class user{
  nome:string;
  cpf:string;
  estado:string;
  cidade:string;
  bairro:string;
  endereco:string;
  numero:number;
  cep:string;
  telefone:number;
  nomeContato:string;
  email:string;
  senha:string;
  empresa:boolean;

  constructor(nome:string, cpf:string, estado:string, cidade:string, bairro:string, endereco:string, numero:number, cep:string, telefone:number, nomeContato:string, email:string, senha:string, empresa:boolean) {
      this.nome = nome;
      this.cpf = cpf;
      this.estado = estado;
      this.cidade = cidade;
      this.bairro = bairro;
      this.endereco = endereco;
      this.numero = numero;
      this.cep = cep;
      this.telefone = telefone;
      this.nomeContato = nomeContato;
      this.email = email;
      this.senha = senha;
      this.empresa = empresa;
  }
}
