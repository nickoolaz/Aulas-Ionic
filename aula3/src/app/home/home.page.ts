import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public nomeDaVariavel: any;
  public pessoa = { 
    id:1,
    nome: 'Nicolas',
    sobrenome: 'Araujo',
    gostoMusical: 'kpop',
    idade: 19
  } 

  public listaAlunos: any = []; //declarar uma lista

  constructor() {
    this.nomeDaVariavel = "Objetos em ts";
    this.pessoa.gostoMusical = "rock" //Posso trocar a variavel aqui caso eu queira;

    console.log(this.pessoa);
  }

  public acrescentaIdade(){ //metodo
    this.pessoa.idade += 1
  }

  public decrentaIdade(){ //metodo
    this.pessoa.idade -= 1
  }

  public addAluno(nome: String, idade: number, gostoMusical:String){
    this.listaAlunos.push(
      { //declarar objetos
        nome: nome,
        idade: idade,
        gostoMusical: gostoMusical
      }
    );
    this.printaListaAlunos();
  }

  public printaListaAlunos(){
    this.listaAlunos.forEach((element: any) => {
      console.log(element)
      /*if(element.idade > 25){ //estrutura de controle
        console.log(element)
      }*/
    });
  }

}
