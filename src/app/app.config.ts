import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

  import { APP_INITIALIZER } from '@angular/core';
import { importProvidersFrom } from '@angular/core';


import { KeycloakAngularModule } from 'keycloak-angular';
import { bootstrapApplication } from '@angular/platform-browser';
import { KeycloakService } from './keycloak.service';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(),KeycloakService,{
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
     importProvidersFrom(KeycloakAngularModule)
  ]
};


function initializeKeycloak(keycloakService: KeycloakService) {
   return () => keycloakService.init();
 }