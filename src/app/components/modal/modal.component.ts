import { Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { ModalActions, ModalService } from '../../services/modal.service';
import { ProductService } from '../../services/product.service';
import Product from '../../models/product';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [AsyncPipe],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnInit, OnDestroy {
  showModal: boolean = false;
  product$: Observable<Product>;
  private modalSubscription!: Subscription;

  constructor(
    private modalService: ModalService,
    private productService: ProductService
  ) {
    this.product$ = EMPTY;
  }

  ngOnInit() {
    this.modalSubscription = this.modalService.modalState$.subscribe(
      (state) => {
        this.showModal = state === ModalActions.OPEN;
        this.product$ = this.productService.selectProduct(
          this.modalService.id ?? -1
        );
      }
    );
  }

  ngOnDestroy() {
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
  }

  confirm() {
    this.modalService.confirmModal();
  }

  close() {
    this.modalService.closeModal();
  }
}
