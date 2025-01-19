import { Component } from '@angular/core';
import Product from '../../models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  imports: [FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product: Product;
  locked = true;

  constructor() {
    this.product = new Product();
  }
  apply() {}
  delete() {}
  toogleEdit() {
    this.locked = !this.locked;
  }
}
