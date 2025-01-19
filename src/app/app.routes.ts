import { Routes } from '@angular/router';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { TokenComponent } from './components/token/token.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: ProductTableComponent },
  { path: 'login', component: TokenComponent },
  { path: 'product/:id', component: ProductDetailComponent },
];
