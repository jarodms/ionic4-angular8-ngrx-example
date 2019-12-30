import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from '../counter.actions';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  count$ = this.store.select('count');

  constructor(private store: Store<{ count: number }>) {  }

  increment() {
    this.store.dispatch(increment());
  }
}
