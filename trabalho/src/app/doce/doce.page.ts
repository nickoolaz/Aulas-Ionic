import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doce',
  templateUrl: './doce.page.html',
  styleUrls: ['./doce.page.scss'],
})
export class DocePage {

  public doces = {
    cod: 0,
    nome: '',
    categoria: 0,
    descricao: '',
    valor: 0.00,
    imagens: [],
    visibled: false
  }

  public quantidade = 0;
  public pathImgs = '../../assets/img/';

  public convertReais = (valor: any) => {
    const valorFormatado = valor.toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    return `R$${valorFormatado}`;
  }

  public add() {
    this.quantidade += 1;
  }

  public remove() {
    if (this.quantidade > 0) {
      this.quantidade -= 1;
    }
  }
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.doces = params['doces'];
    });
  }

}
