import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../models/product';
import { EMPTY, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products$: Observable<Product[]>;

  constructor(private http: HttpClient) {
    this.products$ = EMPTY;
  }

  getProducts(): Observable<Product[]> {
    const endpoint = '/items';
    this.products$ = this.http.get<Product[]>(environment.rootURL + endpoint);
    return this.products$;
  }
}
