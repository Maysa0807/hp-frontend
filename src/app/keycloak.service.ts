import { Injectable } from '@angular/core';
import { KeycloakService as KCService } from 'keycloak-angular';
import type { KeycloakProfile } from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
  private userProfile?: KeycloakProfile;

  constructor(private keycloak: KCService) {}

async init(): Promise<void> {
  await this.keycloak.init({
    config: {
      url: 'http://localhost:8080',
      realm: 'quickstart',
      clientId: 'frontend-client',
    },
    initOptions: {
      onLoad: 'check-sso', //'login-required', 'check-sso'Só verifica sessão, não força login
      checkLoginIframe: true,
    },
  });

  const isLoggedIn = this.keycloak.isLoggedIn();

  if (isLoggedIn) {
    this.userProfile = await this.keycloak.loadUserProfile();
    localStorage.setItem("token", await this.keycloak.getToken());
  } else {
    this.userProfile = undefined; // ou null, para garantir
  }
}

  getUsername(): string | undefined {
    return this.userProfile?.username;
  }

  async getToken(): Promise<string> {
    return this.keycloak.getToken();
  }

  logout(): void {
    this.keycloak.logout();
  }

  login(): void {
    this.keycloak.login();
  }


  isLoggedIn(): boolean {
    return this.keycloak.isLoggedIn();
  }
}
