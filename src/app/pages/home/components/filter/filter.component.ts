import { Component,EventEmitter ,Output,OnInit ,OnDestroy} from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: `filter.component.html`,
  styles: [
  ]
})
export class FilterComponent implements OnInit ,OnDestroy{
  @Output() showCategory = new EventEmitter<string>();
  categoriesSubscription: Subscription | undefined;
  categories : Array<string> | undefined;

  constructor(private storeService: StoreService){
  }

ngOnInit():void {
  this.categoriesSubscription = this.storeService.getAllCategories()
      .subscribe((response) => {
        console.log(response);
        
         this.categories = response
      });
}

onUpdateCategory(category: string): void {
  this.showCategory.emit(category);
}

ngOnDestroy(): void {
    if(this.categoriesSubscription){
         this.categoriesSubscription.unsubscribe();
    }
}
}
