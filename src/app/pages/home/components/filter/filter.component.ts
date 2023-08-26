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


onUpdateCategory(category: string): void {
  this.showCategory.emit(category);
}


}
