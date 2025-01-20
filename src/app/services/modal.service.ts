import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductService } from './product.service';

export enum ModalActions {
  OPEN,
  CLOSE,
  CONFIRM,
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalSubject = new Subject<ModalActions>();
  modalState$ = this.modalSubject.asObservable();
  id?: number;

  constructor() {}

  openModal(id: number) {
    this.id = id;
    this.modalSubject.next(ModalActions.OPEN);
  }

  closeModal() {
    this.modalSubject.next(ModalActions.CLOSE);
  }

  confirmModal() {
    this.modalSubject.next(ModalActions.CONFIRM);
  }
}
