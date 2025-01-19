import { DOCUMENT } from '@angular/common';
import { Component, computed, inject, Signal } from '@angular/core';
import { SunComponent } from './sun-component/sun.component';
import { MoonComponent } from './moon-component/moon.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme',
  imports: [SunComponent, MoonComponent],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css',
})
export class ThemeComponent {
  darkMode: Signal<Boolean>;

  constructor(private theme: ThemeService) {
    this.darkMode = this.theme.isDark;
  }

  darkModeClick() {
    this.theme.toogleTheme();
  }
}
