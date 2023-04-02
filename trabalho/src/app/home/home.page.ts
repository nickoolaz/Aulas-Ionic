import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public categorias = [
    { cod: 1, nome: 'Bolos' },
    { cod: 2, nome: 'Docinhos' },
    { cod: 3, nome: 'Donuts' },
    { cod: 4, nome: 'Sorvetes' }
  ]

  public doces = [
    { cod: 1, nome: 'Bolo de Chocolate', categoria: 1, descricao: 'O bolo de chocolate é uma sobremesa clássica que agrada a todos e é perfeito para qualquer ocasião. Seja para um lanche da tarde, festas de aniversário, eventos corporativos ou até mesmo para presentear alguém especial, o nosso bolo de chocolate é uma escolha que certamente irá surpreender e encantar.', valor: 49.99, imagens: ['bolo-chocolate.png'], visibled: false },
    { cod: 2, nome: 'Bolo de Murango', categoria: 1, descricao: 'Nosso bolo de morango é uma sobremesa refrescante e deliciosa, perfeita para aqueles que amam morangos. Feito com ingredientes selecionados e morangos frescos, o nosso bolo tem um sabor suave e doce de morango, com uma textura macia e úmida que derrete na boca.', valor: 35.00, imagens: ['bolo-morango.png'], visibled: false },
    { cod: 3, nome: 'Bolo de Cenoura', categoria: 1, descricao: 'A massa do bolo é preparada com cenouras frescas raladas, misturadas com farinha de trigo, açúcar mascavo, ovos, óleo de coco e um toque secreto que faz toda a diferença. Em seguida, o bolo é assado com cuidado para garantir que fique perfeitamente leve e fofo.', valor: 20.50, imagens: ['bolo-cenoura.png'], visibled: false },
    { cod: 4, nome: 'Brigadeiro', categoria: 2, descricao: 'A simplicidade na preparação, a textura cremosa e o sabor inconfundível do brigadeiro fazem dele um dos doces mais amados e consumidos no Brasil e em diversos países ao redor do mundo. Se você ainda não experimentou essa delícia, não perca mais tempo e experimente agora mesmo.', valor: 2.00, imagens: ['brigadeiro.png'], visibled: false },
    { cod: 5, nome: 'Beijinho', categoria: 2, descricao: 'Com uma textura macia e um sabor doce e acentuado de coco, o beijinho é uma sobremesa perfeita para todas as ocasiões, seja como uma sobremesa após o almoço, para uma festa de aniversário, ou para satisfazer aquela vontade de comer um doce no meio da tarde.', valor: 2.00, imagens: ['beijinho.png'], visibled: false },
    { cod: 6, nome: 'Casadinho', categoria: 2, descricao: 'O casadinho é um doce tradicional que faz parte da cultura brasileira e que agrada a todas as idades. Ele é uma opção perfeita para quem procura um doce saboroso e reconfortante, que traz lembranças de infância e momentos especiais.', valor: 3.50, imagens: ['casadinho.png'], visibled: false },
    { cod: 7, nome: 'Donuts Homer', categoria: 3, descricao: 'Os donuts Homer são uma versão divertida e deliciosa do clássico doce americano. Eles são feitos com uma massa fofa e macia, cobertos com um glacê rosa brilhante e decorados com sprinkles coloridos em forma de letras para formar a palavra "Mmm... Donuts!" - uma referência ao personagem Homer Simpson, da série de televisão "Os Simpsons".', valor: 20.00, imagens: ['donuts-homer.png'], visibled: false },
    { cod: 8, nome: 'Donuts de Brigadeiro', categoria: 3, descricao: 'Os donuts de brigadeiro são uma ótima opção para quem procura um doce diferente e saboroso para servir em festas e eventos especiais. Com seu visual charmoso e atraente, eles são uma verdadeira atração à mesa.', valor: 19.99, imagens: ['donuts-brigadeiro.png'], visibled: false },
    { cod: 9, nome: 'Donuts de Prestígio', categoria: 3, descricao: 'Os donuts de prestígio são ideais para quem procura uma sobremesa sofisticada e elegante, e são perfeitos para servir em festas e eventos especiais. Eles são visualmente impressionantes e saborosos, e certamente deixarão uma impressão duradoura em todos os seus convidados.', valor: 14.99, imagens: ['donuts-prestigio.png'], visibled: false },
    { cod: 10, nome: 'Sorvete de Morango', categoria: 4, descricao: 'O sorvete de morango é uma sobremesa clássica que pode ser apreciada em qualquer ocasião. É perfeito para uma tarde quente de verão, como sobremesa depois do jantar ou como acompanhamento para uma fatia de bolo. É uma sobremesa versátil que agrada a todos os gostos.', valor: 9.50, imagens: ['sorvete-morango.png'], visibled: false },
    { cod: 11, nome: 'Sorvete de Flocos', categoria: 4, descricao: 'O sorvete de flocos é uma deliciosa sobremesa cremosa, com um sabor suave de baunilha e pedaços crocantes de chocolate. A base do sorvete é feita com creme de leite fresco, açúcar e uma pitada de sal, que é então infundida com sabor de baunilha natural.', valor: 6.50, imagens: ['sorvete-flocos.png'], visibled: false },
    { cod: 12, nome: 'Sorvete de Maracujá', categoria: 4, descricao: 'O sorvete de maracujá é uma sobremesa refrescante e deliciosa, feita com polpa de maracujá natural e uma base cremosa de leite e açúcar. Ele possui um sabor agridoce, com um toque de acidez da fruta que dá um toque especial à sobremesa.', valor: 10.00, imagens: ['sorvete-maracuja.png'], visibled: false },
  ]

  public pathImgs = '../../assets/img/';

  public setCategoria = 0;

  public selecionado: any;

  public slideOpts = {
    slidesPerView: 2
  }

  public setSelecionado(codCategoria: any) {
    this.setCategoria = codCategoria;

    this.doces.map(el => el.visibled = false);

    this.doces
      .filter(el => el.categoria == this.setCategoria)
      .map(el => el.visibled = true);
  }

  public goDoces(doces: any) {
    this.navCtrl.navigateForward('doce', {
      queryParams: { doces: doces }
    });
  }

  public convertReais = (valor: any) => {
    const valorFormatado = valor.toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    return `R$${valorFormatado}`;
  }

  constructor(private navCtrl: NavController) {
    this.setSelecionado(1);
  }
}
