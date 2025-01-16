import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  private token?: string;

  saveToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }
}
