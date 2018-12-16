import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { AddBikePage } from '../add-bike/add-bike.page';
import { ViewBikePage } from '../view-bike/view-bike.page';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	bikes: any;
  error: any;

  constructor(public nav: NavController, public modalCtrl: ModalController, public alertCtrl: AlertController, public bikesService: BikesService) {
    this.getBikes();
  }

  getBikes () {
    this.bikesService.getBikes().then((res) => {
      if (res.status == 'error') {
        this.error = true;
        this.bikes = [];
      } else {
        this.error = false;
        this.bikes = res.body;
      }
    });
  }

  async getBike (bike) {
    let modal = await this.modalCtrl.create({
      component: ViewBikePage,
      componentProps: { bike : bike }
    });
    return await modal.present();
  }

  async addBike () {
    let modal = await this.modalCtrl.create({
      component: AddBikePage,
      componentProps: { bike : {} }
    });
    modal.present();

    const { data } = await modal.onWillDismiss();

    if (data) {
      this.bikesService.createBike(data).then((res) => {
        this.getBikes();
      });
    }
  }

  async editBike (bike) {
    let modal = await this.modalCtrl.create({
      component: AddBikePage,
      componentProps: { bike : bike }
    });
    modal.present();

    const { data } = await modal.onWillDismiss();

    if (data) {
      data.id = bike._id;

      this.bikesService.editBike(data).then((res) => {
        this.getBikes();
      });
    }
  }

  async deleteBike (bike) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmación',
      message: '¿Desea eliminar el registro seleccionado?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (res) => { }
        }, {
          text: 'Eliminar',
          handler: () => {
            this.bikesService.deleteBike(bike._id).then((res) => {
              this.getBikes();
            });
          }
        }
      ]
    });

    await alert.present();
  }
}
