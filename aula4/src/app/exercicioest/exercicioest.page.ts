import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicioest',
  templateUrl: './exercicioest.page.html',
  styleUrls: ['./exercicioest.page.scss'],
})
export class ExercicioestPage implements OnInit {

  public botoes = [
    { titulo : 'Funcionários', icone: 'people' },
    { titulo : 'Despesas'    , icone: 'cash'   },
    { titulo : 'Vendas'      , icone: 'cart'   },
    { titulo : 'Promoções'   , icone: 'ticket' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
