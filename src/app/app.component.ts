import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TokenComponent } from './components/token/token.component';
import { ThemeComponent } from './components/theme/theme.component';
import { ProductTableComponent } from './components/product-table/product-table.component';

@Component({
  selector: 'app-root',
  imports: [
    NgOptimizedImage,
    TokenComponent,
    ThemeComponent,
    ProductTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  logged = false;

  startApp() {
    this.logged = true;
  }
}
