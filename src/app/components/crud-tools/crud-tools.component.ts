import { Component, Input } from '@angular/core';

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

  onToolClicked(action: ToolOptions): void {
    console.log(this.productId, action);
  }
}
