import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../models/product';
import { EMPTY, Observable, map, shareReplay, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProductPostRequest } from '../models/product-post-request';
import { ProductPatchRequest } from '../models/product-patch-request';
import { ModalActions, ModalService } from './modal.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products$: Observable<Product[]>;

  constructor(private http: HttpClient, private modal: ModalService) {
    this.products$ = this.callProducts();
  }

  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  refreshProducts() {
    this.products$ = this.callProducts();
    this.products$.subscribe();
  }

  callProducts() {
    return this.http
      .get<Product[]>(environment.rootURL + '/items')
      .pipe(shareReplay(1));
  }

  selectProduct(id: number): Observable<Product> {
    return this.products$.pipe(
      map((products) => {
        if (id < 0) {
          return new Product();
        } else {
          return products.filter((product) => product.id === id)[0];
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

  deleteProduct(id: number): Observable<void> {
    this.modal.openModal(id);
    return this.modal.modalState$.pipe(
      switchMap((state) => {
        if (state == ModalActions.CONFIRM) {
          return this.http.delete<void>(environment.rootURL + '/items/' + id);
        } else {
          return EMPTY;
        }
      })
    );
  }
}
