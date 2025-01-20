import { Component, OnDestroy, OnInit, Signal } from '@angular/core';
import Product from '../../models/product';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, of, Subscription } from 'rxjs';
import { AsyncPipe, KeyValuePipe } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { SvgComponent } from '../svg/svg.component';
import { profile } from 'console';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-detail',
  imports: [FormsModule, AsyncPipe, SvgComponent, KeyValuePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  id: number;
  newKey: string = '';
  productSub?: Subscription;
  product: Product = new Product();
  locked$: Observable<boolean>;

  constructor(
    route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    const productIndex = Number(route.snapshot.paramMap.get('id'));
    this.id = Number.isNaN(productIndex) ? -1 : productIndex;

    this.locked$ = route.queryParamMap.pipe(
      map((params) => {
        return params.get('edit') === 'false';
      })
    );
  }

  ngOnInit(): void {
    this.productSub = this.productService
      .selectProduct(this.id)
      .subscribe((product) => {
        this.product = product;
      });
  }

  goBack() {
    this.router.navigate(['/']);
  }

  addKey() {
    if (this.newKey === '') {
      return;
    }

    if (this.product.profile[this.newKey] === undefined) {
      console.log('test');
      this.product.profile[this.newKey] = '';
    }

    this.newKey = '';
  }

  removeKey(key: string) {
    delete this.product.profile[key];
  }

  apply() {
    if (this.id < 0) {
      this.productService.addProduct(this.product).subscribe(() => {
        this.goBack();
      });
    } else {
      this.productService.updateProduct(this.product).subscribe(() => {
        this.goBack();
      });
    }
  }

  delete() {
    this.productService.deleteProduct(this.id);
  }

  toogleEdit() {
    this.locked$ = of(false);
  }

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }
}
