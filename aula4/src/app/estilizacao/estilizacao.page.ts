import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estilizacao',
  templateUrl: './estilizacao.page.html',
  styleUrls: ['./estilizacao.page.scss'],
})
export class EstilizacaoPage implements OnInit {
  
  public itens = ['linha 1', 'linha 2', 'linha 3', 'linha 4'];

  constructor() { }

  ngOnInit() {
  }

}
