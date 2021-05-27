import { Component, Injectable, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


//OBTENER LOS DATOS DEL FORMULARIO
  NuevaMascota = new FormGroup({
    nombre: new FormControl(''),
    tipo: new FormControl(''),
    edad: new FormControl(),
    descripcion: new FormControl(''),
    imagen: new FormControl(''),
  });

baseURL: string = "http://localhost:4200/createanimal";

constructor(private http: HttpClient){

}
//IMPRIMIR LOS DATOS DEL FORMULARIO
  getData(){
    // const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(this.NuevaMascota.value);
    console.log(body)
    return this.http.post(`${this.baseURL}`,body);
  }

  ngOnInit(): void {

  }

}
