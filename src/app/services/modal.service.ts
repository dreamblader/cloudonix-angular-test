import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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
