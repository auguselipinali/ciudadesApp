import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { RootObject } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  constructor(private http:HttpClient) {}

  getCiudadesMuestra(){
    return this.http.get<RootObject[]>("http://api.weatherapi.com/v1/search.json?key=620e0c8835244469b1a223416230307&q=San%20j");
    }

}
