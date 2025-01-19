import { Component, Input } from '@angular/core';
import { CrudService } from '../../services/crud.service';

export enum ToolOptions {
  VIEW,
  EDIT,
  DELETE,
}

@Component({
  selector: 'crud-tools',
  imports: [],
  templateUrl: './crud-tools.component.html',
  styleUrl: './crud-tools.component.css',
})
export class CrudToolsComponent {
  @Input({ required: true }) productId!: number;

  constructor(private crud: CrudService) {}

  onToolClicked(action: ToolOptions): void {
    this.crud.action(action, this.productId);
  }
}
