import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entorno } from '../Entornos/Entorno';

@Injectable({
  providedIn: 'root'
})
export class NavbarEstiloServicio {
  private Url = `${Entorno.ApiUrl}navbar`; 

  constructor(private http: HttpClient) {}

  private obtenerHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // O donde guardes el token
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Agregar el token en los headers
    });
  }

  Listado(): Observable<any> {
    return this.http.get(`${this.Url}/listado`, { headers: this.obtenerHeaders() });
  }
  
  Crear(Datos: any): Observable<any> {
    return this.http.post(`${this.Url}/crear`, Datos, { headers: this.obtenerHeaders() });
  }

  ObtenerPorCodigo(Codigo: number): Observable<any> {
    return this.http.get(`${this.Url}/${Codigo}`, { headers: this.obtenerHeaders() });
  }

  Editar(Datos: any): Observable<any> {
    return this.http.put(`${this.Url}/editar/${Datos.CodigoNavbar}`, Datos, { headers: this.obtenerHeaders() });
  }

  Eliminar(Codigo: number): Observable<any> {
    return this.http.delete(`${this.Url}/eliminar/${Codigo}`, { headers: this.obtenerHeaders() });
  }

  CrearEditar(Datos: any): Observable<any> {
    return this.http.post(`${this.Url}/creareditar`, Datos, { headers: this.obtenerHeaders() });
  }
}
