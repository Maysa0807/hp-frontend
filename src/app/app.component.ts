import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HpService } from './services/hp.service';
import { Component, importProvidersFrom } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeycloakService } from './keycloak.service';


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'harry-potter-app';

  personagens: any[] = [];

  searchName: string;
  //searchHouse: string | null = null;
  
  constructor(private hpService: HpService, private keycloakService: KeycloakService){
    this.searchName = "";
    this.buscarPersonagens();
  }

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
}

