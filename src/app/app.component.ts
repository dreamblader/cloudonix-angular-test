import { NgOptimizedImage } from '@angular/common';
import { Component, computed, Signal } from '@angular/core';
import { ThemeComponent } from './components/theme/theme.component';
import { CrudService } from './services/crud.service';
import { ThemeService } from './services/theme.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage, ThemeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  logged = false;
  logoSrc: Signal<string>;
  constructor(private theme: ThemeService, private crud: CrudService) {
    this.logoSrc = computed(() => {
      return theme.isDark()
        ? '/assets/cloudonix_logo_dark.png'
        : '/assets/cloudonix_logo.png';
    });
  }

  startApp() {
    this.logged = true;
  }
}
