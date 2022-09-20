import { Component } from '@angular/core';
import { Purchase } from '../model/Purchase';
import { User } from '../model/User';
import { PurchaseService } from '../purchase.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-purchases-page',
  templateUrl: './purchases-page.component.html',
  styleUrls: ['./purchases-page.component.css'],
})
export class PurchasesPageComponent {
  user?: User;

  currentPage: number = 1;
  purchases: Purchase[] = [];

  constructor(
    private purchaseService: PurchaseService,
    private sessionService: SessionService
  ) {
    this.sessionService.currentUser.subscribe((user) => {
      this.user = user;
      this.getPurchases();
    });
  }

  previousPage() {
    this.currentPage--;
    this.getPurchases();
  }

  nextPage() {
    this.currentPage++;
    this.getPurchases();
  }

  getPurchases() {
    if (this.user == undefined) {
      this.purchases = [];
      return;
    }
    this.purchaseService
      .getByUser(this.user.id, this.currentPage - 1)
      .subscribe({
        next: (response: Purchase[]) => {
          this.purchases = response;
        },
      });
  }
}
