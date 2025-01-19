import { Component } from '@angular/core';
import Product from '../../models/product';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product: Product;
  locked$: Observable<boolean>;

  constructor(private route: ActivatedRoute) {
    this.product = new Product();
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
