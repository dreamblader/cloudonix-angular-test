import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TokenComponent } from './components/token/token.component';
import { ThemeComponent } from './components/theme/theme.component';

@Component({
  selector: 'app-root',
  imports: [NgOptimizedImage, TokenComponent, ThemeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
}
