import { Component } from '@angular/core';
import Product from '../../models/product';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { SvgComponent } from '../svg/svg.component';

@Component({
  selector: 'app-product-detail',
  imports: [FormsModule, AsyncPipe, SvgComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  id: number;
  product$: Observable<Product>;
  locked$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    const productIndex = Number(route.snapshot.paramMap.get('id'));
    this.id = Number.isNaN(productIndex) ? -1 : productIndex;
    this.product$ = productService.selectProduct(this.id);

    this.locked$ = route.queryParamMap.pipe(
      map((params) => {
        return params.get('edit') === 'false';
      })
    );
  }

  goBack() {
    this.router.navigate(['/']);
  }

  apply() {}

  delete() {
    this.productService.deleteProduct(this.id);
  }

  toogleEdit() {
    this.locked$ = of(false);
  }
}
