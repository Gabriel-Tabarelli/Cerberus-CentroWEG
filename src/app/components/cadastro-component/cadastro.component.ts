import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  ngOnInit(): void {
    console.log(this.edicao)
  
    const User = {
      nome: 'John Doe',
      cpf: '12345678901',
      estado: 'São Paulo',
      cidade: 'São Paulo',
      bairro: 'Centro',
      endereco: 'Rua Principal',
      numero: 123,
      cep: '12345-678',
      telefone: 987654321,
      nomeContato: 'Jane Doe',
      email: 'johndoe@example.com',
      senha: 'password'
    };

    this.nome = User.nome;
    this.cpf = User.cpf;
    this.estado = User.estado;
    this.cidade = User.cidade;
    this.bairro = User.bairro;
    this.endereco = User.endereco;
    this.numero = User.numero;
    this.cep = User.cep;
    this.telefone = User.telefone;
    this.nomeContato = User.nomeContato;
    this.email = User.email;
    this.senha = User.senha;

    if (this.cpf == null) {
      this.pessoaJuridica();	
    } else {
      this.pessoaFisica();
    }

    if (this.edicao) {
      this.titulo = "Edição";
      this.acao = "Editar";
    }

  }

  @Input()
  edicao: boolean = false;
  acao: string = "Cadastrar";
  titulo: string = "Cadastro";
  textNome:string = "Nome";
  textId:string = "CPF";
  
  pessoa:boolean = true;

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
    this.lista.push(new user(this.nome, this.cpf, this.estado, this.cidade, this.bairro, 
      this.endereco, this.numero, this.cep, this.telefone, this.nomeContato, this.email, this.senha))
    console.log(this.lista)
  }
  // --------end---------

  pessoaJuridica(){
      this.textNome = "Empresa"
      this.textId = "CNPJ";
  }

  pessoaFisica(){
      this.textNome = "Nome"
      this.textId = "CPF";
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

  constructor(nome:string, cpf:string, estado:string, cidade:string, bairro:string, endereco:string, numero:number, cep:string, telefone:number, nomeContato:string, email:string, senha:string) {
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
  }
}
