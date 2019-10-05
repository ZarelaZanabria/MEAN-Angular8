import { Component, OnInit } from '@angular/core';

@Component({ //Decorador 
  selector: 'app-store', //Matadatos en que etiqueta 
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public title : string;
  public list : string;

  public titlePark : string; 

  constructor() { 
    this.title = 'Componente tienda';
    this.list = 'Bonca Saga';

  }

  ngOnInit() {
  }

  mostrar(){
    console.log(this.titlePark);
    
  }

}
