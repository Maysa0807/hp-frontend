import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { KeycloakService } from "../keycloak.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class FavoritesService {
  private api = 'http://localhost:3000/favorites'; 

  constructor(private http: HttpClient, private keycloak: KeycloakService) {}

  getFavorites(): Observable<number[]> {
    return this.http.get<number[]>(this.api);
  }

  addFavorite(personagem: any): Observable<void> {
    return this.http.post<void>(`${this.api}`, personagem);
  }

  removeFavorite(id: number): Observable<void> {
     return this.http.delete<void>(`${this.api}/${id}`);
  }

}
