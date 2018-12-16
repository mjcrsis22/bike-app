import { Component, OnInit } from '@angular/core';
import { NavParams, NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-bike',
  templateUrl: './view-bike.page.html',
  styleUrls: ['./view-bike.page.scss'],
})
export class ViewBikePage implements OnInit {

  viewBike: any;

  constructor(private navParam: NavParams, private modalCtrl: ModalController) {
    this.viewBike = this.navParam.get('bike');

  }

  ngOnInit() { }

  close(): void {
    this.modalCtrl.dismiss();
  }
}
