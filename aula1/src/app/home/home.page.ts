import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public a : number = 1; /*: number define o tipo da variavel*/
  private b : number = 2;
  c : number = 0;

  constructor(private alertController: AlertController) {
    /*alert("Aperte aqui");
    console.log("Watashi wa kira desu");*/
    this.c = this.a + this.b;
    console.log(this.c)
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}