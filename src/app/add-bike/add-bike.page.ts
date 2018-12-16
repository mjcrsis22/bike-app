import { Component, OnInit } from '@angular/core';
import { NavParams, NavController, ModalController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.page.html',
  styleUrls: ['./add-bike.page.scss'],
})
export class AddBikePage implements OnInit {

  bikeForm : FormGroup;

  ModelosLst: any;
  ColoresLst: any;
  RodadosLst: any;

  constructor(private navParam: NavParams, private modalCtrl: ModalController, private formBuilder: FormBuilder) {

    this.ModelosLst = [
      "De Montaña",
      "De Ruta",
      "Híbridas",
      "Urbana",
      "Plegable",
      "Single speed",
      "Cruisers",
      "MBX",
      "Touring",
      "Eléctricas",
      "Utilitarias",
      "Fat Bikes"
    ];

    this.ColoresLst = [
      "Blanco",
      "Negro",
      "Rojo",
      "Verde",
      "Azul"
    ];

    this.RodadosLst = [
      "20",
      "26",
      "28"
    ];

    const initialBike = this.navParam.get('bike');

    this.bikeForm = this.formBuilder.group({
      nombre: [initialBike.nombre, Validators.required],
      modelo: [initialBike.modelo, Validators.required],
      color: [initialBike.color, Validators.required],
      rodado: [initialBike.rodado, Validators.required],
      precio: [initialBike.precio]
    });
  }

  ngOnInit() { }

  save(): void {
    this.modalCtrl.dismiss(this.bikeForm.value);
  }

  close(): void {
    this.modalCtrl.dismiss();
  }
}
