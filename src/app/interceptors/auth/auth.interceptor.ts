import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { KeycloakService } from '../../keycloak.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

    const router = inject(Router);
    const keycloakService = inject(KeycloakService);

  const token = localStorage.getItem('token');

  let authReq = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        localStorage.removeItem('token');
        keycloakService.login();
      }
      return throwError(() => error);
    })
  );

};


//nomevariavel = 1 == 1 ? 'é verdadeiro' : 'é falso';