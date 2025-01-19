import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticateService } from './services/authenticate.service';
import { inject } from '@angular/core';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const token = inject(AuthenticateService).getToken();

  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }

  return next(req);
}
