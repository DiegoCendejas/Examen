import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente/cliente.service';
import { Cliente } from '../Interfaces/Cliente';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RESTComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe((response: any) => {
      this.clientes = response;
    });
  }

  Nuevo_Cliente(): void {
    alert('No sirve la url del servicio, ver consola para más detalles');
    let cliente = new Cliente();
    cliente.Nombre = "Logan";
    cliente.Apellidos = "Benitez";
    cliente.Nombre_Usuario = "LOBE";
    cliente.Correo_Electronico = "LOBE@gmail.com";
    cliente.Contraseña = "Admin123";
    this.clienteService.crearCliente(cliente).subscribe((response: any) => {
      //aquí deberia regresar en response el ID a mostrar pero no sirve la url del servicio
      alert('ID');
    });
  }

  Modificar_Cliente(): void {
    alert('No sirve la url del servicio, ver consola para más detalles');
    let cliente = new Cliente();
    cliente.Edad = 101;
    cliente.Estatura = 1.85;
    cliente.Peso = 80;
    cliente.GEB = 1500;
    this.clienteService.actualizarCliente(cliente, 59).subscribe((response: any) => {
      //lo mismo que el otro metodo, la url no es la correcta
      alert('ID');
    });
  }

}
