import { Component } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'token-form',
  imports: [FormsModule],
  templateUrl: './token.component.html',
  styleUrl: './token.component.css',
})
export class TokenComponent {
  token = '';
  constructor(private auth: AuthenticateService) {}

  saveToken() {
    if (this.token.length > 0) {
      this.auth.saveToken(this.token);
      console.log(this.auth.getToken());
    }
  }
}
