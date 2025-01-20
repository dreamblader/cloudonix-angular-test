import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../models/product';
import { Observable, map, shareReplay } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProductPostRequest } from '../models/product-post-request';
import { ProductPatchRequest } from '../models/product-patch-request';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
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
  }

  addProduct(product: Product) {
    const request = new ProductPostRequest().fromProduct(product);
    return this.http.post<Product>(environment.rootURL + '/items', request);
  }

  updateProduct(product: Product) {
    const request = new ProductPatchRequest().fromProduct(product);
    return this.http.patch<Product>(
      environment.rootURL + '/items/' + product.id,
      request
    );
  }

  deleteProduct(id: number): void {
    console.log('DELETE');
  }
}
