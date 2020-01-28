import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService]
})
export class HomeComponent implements OnInit {

  public titulo = "Pagina principal";
  public listado_ropa:Array<string>;
  public prenda_a_guardar:string;

  public nombre ="alejandro perez"

  public fecha:Date;

  constructor(
    private _ropaService:RopaService
  ) { 
    this.fecha = new Date(2020 , 0, 27);
  }

  ngOnInit() {
    this.listado_ropa = this._ropaService.getRopa();
  }

  guardarPrenda(){
    this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar = null;
  }

  eliminarPrenda(index:number){
    this._ropaService.deleteRopa(index);
    alert(index);    
  }

}
