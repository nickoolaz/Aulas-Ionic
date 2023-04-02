import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public primeiroMetodo(a:number, b:number){
    console.log("kira " + (a + b))
    console.log("kira")
  }

  public segundoMetodo(){
    document.clear()
  }
}
