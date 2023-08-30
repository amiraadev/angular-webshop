import { Component,EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: `products-header.component.html`,
})
export class ProductsHeaderComponent {
 @Output() columnsCountChange = new EventEmitter<number>();
 @Output() itemsCountChange = new EventEmitter<number>();
 @Output() sortChange = new EventEmitter<string>();
  sort = 'sort';
  itemsShowCount = 12;

  constructor() {}
  ngOnInit(): void {}

  onSortUpdated(newSort: string):void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number):void {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  }


  onColumnsUpdated(colsNum: number):void {
    this.columnsCountChange.emit(colsNum);
  }

}
