import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {

  public coche: Coche;
  public coches:Array<Coche>

  constructor() { 
    this.coche = new Coche(" "," "," "," ");
    this.coches = [
      new Coche("Renault", "Clio", "107", "Gris perla"),
      new Coche("Renault", "Logan", "86", "Negro satin")
    ];
  }

  ngOnInit() {
  }

  onSubmit(){
    this.coches.push(this.coche);
    this.coche = new Coche(" "," "," "," ");
  }

}
