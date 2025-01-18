import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-theme',
  imports: [],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css',
})
export class ThemeComponent {
  darkModeVal = 'OFF';
  private darkMode = false;
  private readonly document = inject(DOCUMENT);

  darkModeClick() {
    this.darkMode = !this.darkMode;
    this.darkModeVal = this.darkMode ? 'ON' : 'OFF';
    if (this.darkMode) {
      this.document.body.classList.add('dark-theme');
    } else {
      this.document.body.classList.remove('dark-theme');
    }
  }
}
