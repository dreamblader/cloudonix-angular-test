import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import Product from '../../models/product';
import { CrudToolsComponent } from '../crud-tools/crud-tools.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'product-table',
  imports: [CrudToolsComponent, AsyncPipe],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css',
})
export class ProductTableComponent {
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts();
  }
}
