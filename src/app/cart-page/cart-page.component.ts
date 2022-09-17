import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '../cart.service';
import { ProblemCode } from '../common/ProblemCode';
import { CartContent } from '../model/CartContent';
import { Comic } from '../model/Comic';
import { User } from '../model/User';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {

  @Input()
  user!: User;

  @Input()
  content!: CartContent[];

  constructor(private cartService: CartService, private snackBar: MatSnackBar) {}

  showMessage(msg: string){
    this.snackBar.open(msg, undefined, {duration: 5000});
  }

  increaseQuantity(cc: CartContent) {
    this.cartService.changeQuantity(this.user.id, cc.comic.id, cc.quantity+1).subscribe({
      next: (response: any) => {
        cc.quantity++;
      },
      error: (problem: HttpErrorResponse) => {
        if(problem.error[0].code == ProblemCode.COMIC_QUANTITY_UNAVAIABLE) this.showMessage("Quantià non disponibile!");
        else console.error(problem.error[0]);
      }
    });
  }

  decreaseQuantity(cc: CartContent) {
    this.cartService.changeQuantity(this.user.id, cc.comic.id, cc.quantity-1).subscribe({
      next: (response: any) => {
        cc.quantity--;
      }
    });
  }

  removeComic(cc: CartContent) {
    this.cartService.deleteComic(this.user.id, cc.comic.id).subscribe({
      next: (response: any) => {
        let index = this.content.indexOf(cc);
        this.content.splice(index, 1);
      }
    });
  }

  mockData() {
    this.content = [
      {
        quantity: 1,
        comic: {
          id: 1,
          collection: {
            name: "L'attacco dei Giganti",
            id: 1,
            price: 7.19,
            yearOfRelease: 2019,
            formatAndBinding: 'Brossurato',
            color: false,
            description: 'Ecco la descrizione',
            categories: [],
            creationDate: new Date('2022-09-08T19:31:18.758+00:00'),
            dateOfLastModification: new Date('2022-09-08T19:31:18.758+00:00'),
          },
          number: 1,
          quantity: 17,
          pages: 55,
          isbn: '565582492-2',
          publicationDate: new Date('2022-05-11'),
          description:
            'Guarda questa è una descrizione molto lunga di questo fumetto che racconta di un vecchio al mare. I vecchi sono sempre al mare.',
          authors: [
            {
              id: 1,
              name: 'Giovan',
              biography: '',
              creationDate: new Date('2022-09-08T19:31:18.758+00:00'),
              dateOfLastModification: new Date('2022-09-08T19:31:18.758+00:00'),
            },
            {
              id: 2,
              name: 'Nino',
              biography: '',
              creationDate: new Date('2022-09-08T19:31:18.758+00:00'),
              dateOfLastModification: new Date('2022-09-08T19:31:18.758+00:00'),
            },
          ],

          discount: {
            id: 0,
            name: 'Sconto primaverile',
            percentage: 30,
            activationDate: new Date('2022-09-08T19:31:18.758+00:00'),
            expirationDate: new Date('2022-09-08T19:31:18.758+00:00'),
            creationDate: new Date('2022-09-08T19:31:18.758+00:00'),
            dateOfLastModification: new Date('2022-09-08T19:31:18.758+00:00'),
          },
          creationDate: new Date('2022-09-08T19:41:43.354+00:00'),
          dateOfLastModification: new Date('2022-09-08T19:41:43.354+00:00'),
        },
      },
      {
        quantity: 2,
        comic: {
          id: 2,
          collection: {
            name: "L'attacco dei Giganti",
            id: 1,
            price: 7.19,
            yearOfRelease: 2019,
            formatAndBinding: 'Brossurato',
            color: false,
            description: 'Ecco la descrizione',
            categories: [],
            creationDate: new Date('2022-09-08T19:31:18.758+00:00'),
            dateOfLastModification: new Date('2022-09-08T19:31:18.758+00:00'),
          },
          number: 2,
          quantity: 0,
          pages: 55,
          isbn: '565582492-2',
          publicationDate: new Date('2022-05-11'),
          description:
            'Guarda questa è una descrizione molto lunga di questo fumetto che racconta di un vecchio al mare. I vecchi sono sempre al mare.',
          authors: [
            {
              id: 1,
              name: 'Giovan',
              biography: '',
              creationDate: new Date('2022-09-08T19:31:18.758+00:00'),
              dateOfLastModification: new Date('2022-09-08T19:31:18.758+00:00'),
            },
            {
              id: 2,
              name: 'Nino',
              biography: '',
              creationDate: new Date('2022-09-08T19:31:18.758+00:00'),
              dateOfLastModification: new Date('2022-09-08T19:31:18.758+00:00'),
            },
          ],
          creationDate: new Date('2022-09-08T19:41:43.354+00:00'),
          dateOfLastModification: new Date('2022-09-08T19:41:43.354+00:00'),
        },
      },
    ];
  }
}
