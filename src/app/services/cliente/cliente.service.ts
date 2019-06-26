import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Cliente } from 'src/app/Interfaces/Cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  URL: string = "http://187.188.122.85:8091/";

  constructor(private http: HttpClient) { }


  getClientes() {
    return this.http.get(this.URL + 'NutriNET/Cliente');
  }

  crearCliente(cliente: Cliente) {
    let params = JSON.stringify(cliente);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.URL + 'NutriNET/Cliente', params, { headers: headers });
  }

  actualizarCliente(cliente: Cliente, id: number) {
    let params = JSON.stringify(cliente);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.URL + 'NutriNET/Cliente/' + id, params, { headers: headers });
  }
}
