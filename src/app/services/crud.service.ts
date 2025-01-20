import { Injectable } from '@angular/core';
import { ToolOptions } from '../components/crud-tools/crud-tools.component';
import { Router } from '@angular/router';
import { ProductService } from './product.service';
import { tap } from 'rxjs';

export interface CrudAction {
  type: ToolOptions;
  id?: number;
}

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private router: Router, private productService: ProductService) {}

  action(type: ToolOptions, id?: number): void {
    if (type == ToolOptions.DELETE) {
      this.productService.deleteProduct(id ?? -1).subscribe(() => {
        this.productService.refreshProducts();
      });
      return;
    }

    const isEdit = type == ToolOptions.EDIT;
    this.router.navigate([`/product`, id], {
      queryParams: { edit: isEdit },
    });
  }
}
