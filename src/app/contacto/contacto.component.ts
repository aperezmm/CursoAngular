import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';  

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public titulo = "Pagina de contacto de la web";
  public parametro;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => { //Podemos salir de la clase y asignar valores.
      this.parametro = params['page'];
      console.log(params);
    });
  }
  
  redirigir(){
    this._router.navigate(['/contacto', 'alejandroperez']);
  }
  
  redirigirDos(){
    this._router.navigate(['/home']);
  }

}
