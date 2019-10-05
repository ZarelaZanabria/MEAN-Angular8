import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({ // Decorador
  selector: 'app-store', // Matadatos en que etiqueta
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public title: string;
  public list: string;

  public titlePark: string;
  public parkObject: any;

  constructor() {
    this.title = 'Componente tienda';
    this.list = 'Bonca Saga';


  }

  ngOnInit() {
  }

  mostrar() {
    console.log(this.titlePark);

  }
  public verDatosPark(event) {
    console.log(event);
    this.parkObject = event;

  }

}
