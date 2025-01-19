import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  private token?: string;
  private redirectTo?: string;

  constructor(private router: Router) {
    this.logIn();
  }

  logIn() {
    this.redirectTo = this.router.url;
    this.router.navigate(['/login']);
  }

  saveToken(token: string) {
    this.token = token;
    this.router.navigate([this.redirectTo ?? '/']);
  }

  getToken(): string {
    return this.token ?? '';
  }
}
