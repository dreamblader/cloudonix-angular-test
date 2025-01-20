import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../models/product';
import { Observable, map, shareReplay } from 'rxjs';
import { environment } from '../../environments/environment';

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

  selectProduct(id: number): Observable<Product> {
    return this.products$.pipe(
      map((products) => {
        if (id < 0) {
          return new Product();
        } else {
          return products[id];
        }
      })
    );

    // .subscribe((products) => {
    //   if (id < 0) {
    //     this.selectedProduct = new Product();
    //   } else {
    //     this.selectedProduct = products[id];
    //   }
    // });

    //return this.selectedProduct ?? new Product();
  }
}
