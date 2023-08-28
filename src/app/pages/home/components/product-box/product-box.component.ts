import { Component,Input} from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: `./product-box.component.html`,
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  product :Product | undefined ={
    id : 1,
    title : "Snickers",
    price : 150,
    category : 'shoes',
    description : 'Description',
    image : "https://via.placeholder.com/150"
  };

  onAddToCart() : void {

  }
}
