import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../models/product';
import { EMPTY, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products$: Observable<Product[]>;
  private selectedProduct?: Product;

  constructor(private http: HttpClient) {
    this.products$ = EMPTY;
  }

  getProducts(): Observable<Product[]> {
    const endpoint = '/items';
    this.products$ = this.http.get<Product[]>(environment.rootURL + endpoint);

    return this.products$;
  }

  selectProduct(id: number): void {
    this.products$.subscribe(
      (products) => (this.selectedProduct = products[id])
    );
  }

  getSelectedProduct(): Product {
    return this.selectedProduct ?? new Product();
  }
}
