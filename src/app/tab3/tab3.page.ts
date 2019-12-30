import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  count$ = this.store.select('count');

  constructor(private store: Store<{ count: number }>) {}

}
