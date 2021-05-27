import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(){}

  lista:{id:number, nombre:string, tipo:string, edad:number, descripcion:string, imagen:string}[]=[]

  async ngOnInit(){
    const respuesta = await fetch('http://localhost:8080/listarmascotas');
    const respuesta2 = await respuesta.json();
    this.lista=respuesta2
    console.log(this.lista)
  }
}