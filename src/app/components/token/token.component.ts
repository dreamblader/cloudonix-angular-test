import { Component, EventEmitter, Output } from '@angular/core';
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
  error = false;
  @Output() addingTokenEvent = new EventEmitter<boolean>();
  constructor(private auth: AuthenticateService) {}

  saveToken() {
    this.error = this.token.length <= 0;
    if (!this.error) {
      this.auth.saveToken(this.token);
      this.addingTokenEvent.emit(true);
    }
  }
}
