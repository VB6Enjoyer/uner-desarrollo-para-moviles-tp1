import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';
import { LoadingController, ToastController, AlertController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  //imports: [IonicModule],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardContent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class HomeComponent {
  constructor(private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController) { }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Contando estrellas en el escudo de Boca...',
      duration: 5000,
      cssClass: 'custom-loading'
    });
    await loading.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Aguante Boca',
      duration: 2000,
      position: 'middle',
      cssClass: 'custom-toast'
    });
    toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      subHeader: 'Mensaje importante!',
      message: 'Boca Juniors tiene 0 descensos.',
      buttons: ['Vamo\' Boca'],
      cssClass: 'custom-alert'
    });
    await alert.present();
  }
}
