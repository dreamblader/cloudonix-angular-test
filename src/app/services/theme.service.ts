import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDark = signal(false);

  toogleTheme() {
    this.isDark.update((val) => !val);
  }
}
