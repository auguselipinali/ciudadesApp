import { Component } from '@angular/core';
import { Root } from '../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private route: ActivatedRoute) {}

  detalle: Root = {
    location: {
      name: '',
      region: '',
      country: '',
      lat: 0,
      lon: 0,
      tz_id: '',
      localtime_epoch: 0,
      localtime: '',
    },
    current: {
        last_updated_epoch: 0,
        last_updated: "",
        temp_c: 0,
        temp_f: 0,
        is_day: 0,
        wind_mph: 0,
        wind_kph: 0,
        wind_degree: 0,
        wind_dir: "",
        pressure_mb: 0,
        pressure_in: 0,
        precip_mm: 0,
        precip_in: 0,
        humidity: 0,
        cloud: 0,
        feelslike_c: 0,
        feelslike_f: 0,
        vis_km: 0,
        vis_miles: 0,
        uv: 0,
        gust_mph: 0,
        gust_kph: 0,
      },
      
    };
    mostrarDetalle: boolean = false;

    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        if (params['detail']) {
          this.detalle = JSON.parse(params['detail']) as Root;
          this.mostrarDetalle = true;
        }
      });
      console.log( this.route, 'QUERYPARAMS')
    }
  }
  


