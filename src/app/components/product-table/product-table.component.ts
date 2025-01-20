import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import Product from '../../models/product';
import { CrudToolsComponent } from '../crud-tools/crud-tools.component';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { SvgComponent } from '../svg/svg.component';
import { Router } from '@angular/router';

@Component({
  selector: 'product-table',
  imports: [SvgComponent, CrudToolsComponent, AsyncPipe],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css',
})
export class ProductTableComponent {
  search = '';
  products$: Observable<Product[]>;

  constructor(private productService: ProductService, private router: Router) {
    this.products$ = this.productService
      .getProducts()
      .pipe(
        map((products) =>
          products.filter((product) =>
            product.name.toLowerCase().includes(this.search.toLowerCase())
          )
        )
      );
  }

  createProduct() {
    this.router.navigate(['/product/new']);
  }
}
