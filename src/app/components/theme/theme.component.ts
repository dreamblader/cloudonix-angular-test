import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SunComponent } from './sun-component/sun.component';
import { MoonComponent } from './moon-component/moon.component';

@Component({
  selector: 'app-theme',
  imports: [SunComponent, MoonComponent],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css',
})
export class ThemeComponent {
  darkMode = false;
  private readonly document = inject(DOCUMENT);

  darkModeClick() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      this.document.body.classList.add('dark-theme');
    } else {
      this.document.body.classList.remove('dark-theme');
    }
  }
}
