import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {

  public coche: Coche;

  constructor() { 
    this.coche = new Coche(" "," "," "," ");
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.coche);
  }

}
