import { Injectable } from '@angular/core';
import { ToolOptions } from '../components/crud-tools/crud-tools.component';
import { Router } from '@angular/router';

export interface CrudAction {
  type: ToolOptions;
  id?: number;
}

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private router: Router) {}

  action(type: ToolOptions, id?: number): void {
    const isEdit = type == ToolOptions.EDIT;
    this.router.navigate([`/product/${id}`], {
      queryParams: { edit: isEdit },
    });
  }
}
