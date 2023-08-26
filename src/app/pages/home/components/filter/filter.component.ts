import { Component,EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: `filter.component.html`,
  styles: [
  ]
})
export class FilterComponent {
  @Output() showCategory = new EventEmitter<string>();

  categories=['shoes', 'sports'];



onShowCategory(category:string): void {
   this.showCategory.emit(category);
}

// onShowCategory(category:string): void {
//    this.showCategory.emit(category);
// }

}
