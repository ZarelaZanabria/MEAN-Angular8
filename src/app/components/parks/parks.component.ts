import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {

  @Input() name : string; 
  public metro : number;
  public vegetacion : string;
  public abierto : boolean;

  @Output () pasandoDatos = new  EventEmitter();

  constructor() { 
    this.name = "The park zoolo"
    this.metro = 40;
    this.vegetacion = 'Alta';
    this.abierto = false;
  }

  ngOnInit() {
  }

  sendInformation(){
    this.pasandoDatos.emit({
     name : this.name,
     metro: this.metro,
     vegetation :  this.vegetacion ,
     open :  this.abierto,
    });
  }
}
