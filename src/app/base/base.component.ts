import { Component, OnInit } from '@angular/core';
import { Persona } from '../Interfaces/Persona';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BASEComponent implements OnInit {

  nombre: string = "";
  sexo: string = "";
  edad: number = 0;
  peso: number = 0;
  altura: number = 0;

  objPersona1: Persona = new Persona();
  objPersona2: Persona = new Persona();
  objPersona3: Persona = new Persona();

  constructor() { }

  ngOnInit() {
  }

  Enviar_Datos(form, event): void {
    event.preventDefault();
    console.log(form);
    if (form.classList.contains('ng-valid')) {
      this.Crear_Objetos();
      this.Comprobar_Peso();
      this.Mayor_Edad();
    }
    else
      alert('faltan datos');
  }

  Mayor_Edad() {
    alert("Persona 1: Mayor de edad: " + ((this.objPersona1.esMayorDeEdad()) ? "SI" : "NO"));
    alert("Persona 1: Mayor de edad: " + ((this.objPersona2.esMayorDeEdad()) ? "SI" : "NO"));
    alert("Persona 1: Mayor de edad: " + ((this.objPersona3.esMayorDeEdad()) ? "SI" : "NO"));
  }

  Crear_Objetos(): void {
    //instancia objeto 1
    this.objPersona1 = new Persona(this.nombre, this.edad, this.sexo, this.peso, this.altura);
    //instancia objeto 2
    this.objPersona2 = new Persona(this.nombre, this.edad, this.sexo);
    //instancia objeto 3
    this.objPersona3 = new Persona();
    //accediendo a metodos set
    this.objPersona3.setNombre(this.nombre);
    this.objPersona3.setEdad(this.edad);
    this.objPersona3.setSexo(this.sexo);
    this.objPersona3.setPeso(this.peso);
    this.objPersona3.setAltura(this.altura);
  }

  Comprobar_Peso() {
    alert("Persona 1: " + this.obtener_Peso(this.objPersona1));
    alert("Persona 2: " + this.obtener_Peso(this.objPersona2));
    alert("Persona 3: " + this.obtener_Peso(this.objPersona3));
  }

  obtener_Peso(obj: Persona): string {
    let res = obj.calcularIMC();
    let mensaje = "";
    if (res == 0)
      mensaje = "Está Bien";
    else if (res == -1)
      mensaje = "Falta de peso"
    else
      mensaje = "Obeso";
    return mensaje;
  }

}
