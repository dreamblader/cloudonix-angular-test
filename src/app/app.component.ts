import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { TokenComponent } from './components/token/token.component';
import { ThemeComponent } from './components/theme/theme.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ModalComponent } from './components/modal/modal.component';
import { CrudAction, CrudService } from './services/crud.service';
import { Observable } from 'rxjs';

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
  @ViewChild(ModalComponent) modal!: ModalComponent;
  logged = false;

  constructor(private crud: CrudService) {
    crud.actions$.subscribe((action) => {
      console.log('ACTION -->', action);
      this.modal.toggle();
    });
  }

  startApp() {
    this.logged = true;
  }
}
