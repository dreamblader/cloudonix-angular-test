import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToolOptions } from '../components/crud-tools/crud-tools.component';

export interface CrudAction {
  type: ToolOptions;
  id?: number;
}

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private actionSubject = new Subject<CrudAction>();
  actions$ = this.actionSubject.asObservable();

  action(type: ToolOptions, id?: number): void {
    this.actionSubject.next({ type, id });
  }
}
