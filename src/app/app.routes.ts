import { Routes } from '@angular/router';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { TokenComponent } from './components/token/token.component';

export const routes: Routes = [
  { path: '', component: ProductTableComponent },
  { path: 'login', component: TokenComponent },
];
