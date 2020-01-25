import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';


@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public titulo = "Pagina de empleados de la web";
  public empleado:Empleado;   
  public trabajadores:Array<Empleado>;
  public trabajador_externo:boolean;
  public color:string; //Switch

  public color_seleccionado:string;
  
  constructor() {
    this.empleado = new Empleado('Alejandro Perez', 21, 'Gerente', true);
    this.trabajadores = [
      new Empleado('Luz Elena Montes', 35, 'Administradora', true),
      new Empleado('Felix Perez', 40, 'Administrador', false)
    ];
    this.trabajador_externo = false;
    this.color = 'black'; //puedo cambiar este valor 'red', 'green', 'black'
    this.color_seleccionado = '#ccc'
   }

  ngOnInit() {    
    console.log(this.empleado);
    console.log(this.trabajadores);
  }

  cambiarExterno(valor){
    this.trabajador_externo = valor;
  }

  logColorSeleccionado(){
    console.log(this.color_seleccionado);
  }

}
