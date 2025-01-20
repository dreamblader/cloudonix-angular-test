import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../models/product';
import { Observable, shareReplay } from 'rxjs';
import { environment } from '../../environments/environment';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private selectedProduct?: Product;
  private products$: Observable<Product[]>;

  constructor(private http: HttpClient) {
    this.products$ = this.http
      .get<Product[]>(environment.rootURL + '/items')
      .pipe(shareReplay(1));
  }

  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  selectProduct(id: number): Product {
    this.products$.subscribe((products) => {
      if (id < 0) {
        this.selectedProduct = new Product();
      } else {
        this.selectedProduct = products[id];
      }
    });

    return this.selectedProduct ?? new Product();
  }
}
