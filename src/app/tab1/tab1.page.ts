import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CiudadesService } from '../services/ciudades.service';
import { RootObject } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  arrayCiudadesMuestra: RootObject [] = [];
  ciudadesBuscadas: RootObject[] = [];
  mostrarBusqueda: boolean = false;
  constructor(private servicioClimas:CiudadesService, private navCtrl:NavController) {}

  ngOnInit(){  
    this.servicioClimas.getCiudadesMuestra().subscribe(response => {
      console.log(response);
      this.arrayCiudadesMuestra = response;
      
    })

    }

  search(event: any) {
    const regionBuscada = event.target.value;
      if (typeof regionBuscada === 'string') {
      this.ciudadesBuscadas = this.arrayCiudadesMuestra.filter(ciudad =>
      ciudad.region.toLowerCase().includes(regionBuscada.toLowerCase())
      );
      } else {
      this.ciudadesBuscadas = [];
      }
    this.mostrarBusqueda = true;
    }

  detalleCiudad(ciudad: string){
    this.servicioClimas.getCiudadSeleccionada(ciudad).subscribe(detailResponse => {
      this.navCtrl.navigateForward('/tabs/tab2', {
        queryParams: {
          detail: JSON.stringify(detailResponse)
        }
      });
    });

  }

}
