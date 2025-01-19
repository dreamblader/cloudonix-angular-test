import { NgOptimizedImage } from '@angular/common';
import { Component, computed, Signal } from '@angular/core';
import { TokenComponent } from './components/token/token.component';
import { ThemeComponent } from './components/theme/theme.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ModalComponent } from './components/modal/modal.component';
import { CrudAction, CrudService } from './services/crud.service';
import { Observable } from 'rxjs';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [
    NgOptimizedImage,
    TokenComponent,
    ThemeComponent,
    ProductTableComponent,
    ModalComponent,
  ],
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
    crud.actions$.subscribe((action) => {
      console.log('ACTION -->', action);
      this.modal.toggle();
    });
  }

  startApp() {
    this.logged = true;
  }
}
