import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import Product from '../../models/product';

@Component({
  selector: 'product-table',
  imports: [],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css',
})
export class ProductTableComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
