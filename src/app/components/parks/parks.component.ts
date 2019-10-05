import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, DoCheck, OnDestroy } from '@angular/core';


// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit, OnChanges , DoCheck , OnDestroy{

  @Input() name: string;
  public metro: number;
  public vegetacion: string;
  public abierto: boolean;

  @Output () pasandoDatos = new  EventEmitter();

  constructor() {
    this.name = 'The park zoolo';
    this.metro = 40;
    this.vegetacion = 'Alta';
    this.abierto = false;
  }


  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges ): void {
    console.log('Cambios', changes);


  }
  ngOnInit() {
    console.log('metodo Oninit');
  }

  ngDoCheck(): void {
    console.log('El Docheck se ha ejecutado');

  }
  ngOnDestroy(): void {
    console.log('Cuando se elimina ');

  }

  sendInformation() {
    this.pasandoDatos.emit({
     name : this.name,
     metro: this.metro,
     vegetation :  this.vegetacion ,
     open :  this.abierto,
    });
  }
}
