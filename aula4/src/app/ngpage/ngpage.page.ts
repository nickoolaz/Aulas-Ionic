import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngpage',
  templateUrl: './ngpage.page.html',
  styleUrls: ['./ngpage.page.scss'],
})
export class NgpagePage implements OnInit {

  public value: number = 1;

  constructor() { }

  ngOnInit() {
  }

  public addItem(item: any) {
    item.value = 2;
  }

  public removeItem(item: any) {
    item.value = 1;
  }

  public itens = [
    { cod: 1, descricao: 'Macarrão', texto: 'asdfasdfasdf', value: 1 },
    { cod: 2, descricao: 'Batata', texto: 'asdfasdfasdf', value: 1 },
    { cod: 3, descricao: 'Requeijão', texto: 'asdfasdfasdf', value: 1 }
  ]

  maskText(str: String, limit: number) {
    return str.substring(0, limit) + '...';
  }
}
