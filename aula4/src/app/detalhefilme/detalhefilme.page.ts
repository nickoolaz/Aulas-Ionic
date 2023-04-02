import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhefilme',
  templateUrl: './detalhefilme.page.html',
  styleUrls: ['./detalhefilme.page.scss'],
})
export class DetalhefilmePage implements OnInit {
  public pathImgs   = '../../assets/img/';
  public filme = {
    cod: 0,
    titulo: '',
    sinopse: '',
    ano: 0,
    status: true,
    imagens: [],
    visible: true,
    adicionado: false

  }

  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.filme = params['filme'];
    });

  }

  ngOnInit() {
  }

}
