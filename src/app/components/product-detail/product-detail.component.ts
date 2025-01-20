import { Component } from '@angular/core';
import Product from '../../models/product';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product: Product;
  locked$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    const productIndex = Number(route.snapshot.paramMap.get('id'));
    this.product = productService.selectProduct(
      Number.isNaN(productIndex) ? -1 : productIndex
    );

    this.locked$ = route.queryParamMap.pipe(
      map((params) => {
        return params.get('edit') === 'false';
      })
    );
  }

  apply() {}

  delete() {}

  toogleEdit() {
    //this.locked$ = this.locked$.pipe(map((locked) => !locked));
  }
}
