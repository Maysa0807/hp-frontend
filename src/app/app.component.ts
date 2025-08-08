import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HpService } from './services/hp.service';
import { FavoritesService } from './services/favorite.service';
import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeycloakService } from './keycloak.service';


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  title = 'harry-potter-app';
  personagens: any[] = [];
  favorites: number[] = [];
  searchName: string;
  filtraFavoritos = false;
  //searchHouse: string | null = null;
  
  constructor(
    private hpService: HpService, 
    private keycloakService: KeycloakService, 
    private favoritesService: FavoritesService)
    {
    this.searchName = "";
    this.buscarPersonagens();
  }

  ngOnInit() {}

  buscarPersonagens() {
    let filtro:any = {};

      filtro.name = this.searchName;
      filtro.house = this.searchName;

    this.hpService.getHpFiltroPersonagens(filtro).subscribe({
      next: (personagens) => {
        this.personagens = personagens;
        console.log(personagens);
      },
      error: () => {
        alert("Erro ao buscar personagens");
      }
    });
  }

  login(){
    this.keycloakService.login();
  }

  logout(){
    this.keycloakService.logout();
  }

  isLogged(){
    return this.keycloakService.isLoggedIn()
  }


isFavorite(id: number): boolean {
  return this.favorites.includes(id);
}


favoritarDesfavoritar(personagem: any){
  this.favoritesService.addFavorite(personagem).subscribe({
    next: () => {
      personagem.favorito = !personagem.favorito;
      alert("Favoritado com sucesso.");
    },
    error: () =>{
      alert("Erro ao Favoritar.");
    }
  });
}

filtrarFavoritos(){
  this.filtraFavoritos = !this.filtraFavoritos;
}

}

