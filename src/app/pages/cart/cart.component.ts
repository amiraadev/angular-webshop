import { Component } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: `./cart.component.html`,
})
export class CartComponent {
  cart: Cart ={items:[{  
    product : 'https://via.placeholder.com/150',
    name : 'Snickers',
    price : 150,
    quantity : 1,
    id : 1,
  }]}

  dataSource :Array<CartItem>=[];
  displayedColumns:Array<string> = [
    'product', 'name', 'price', 'quantity','total','action'
  ];

  ngOnInit() {
    this.dataSource = this.cart.items;
  };
}
