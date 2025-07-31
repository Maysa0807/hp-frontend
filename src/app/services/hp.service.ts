import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HpService {

  private apiUrl:string = "http://localhost:3000/personagens/filtro";

  constructor(private http:HttpClient) { }

  getHpFiltroPersonagens(filter: { name: string; house: string | null; bornDate: string | null }): Observable<any[]> {
    let params = new HttpParams();

    params = params.set('name', filter.name);

    if (filter.house) {
      params = params.set('house', filter.house);
    }

    if (filter.bornDate) {
      params = params.set('bornDate', filter.bornDate); 
    }

    return this.http.get<any[]>(this.apiUrl, { params });
  }

}
