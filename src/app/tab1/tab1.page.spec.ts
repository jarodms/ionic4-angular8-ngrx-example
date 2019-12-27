import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab1Page } from './tab1.page';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../reducers/counter.reducer';
import { By } from '@angular/platform-browser';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [
        IonicModule.forRoot(),
        StoreModule.forRoot({ count: counterReducer })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment the counter value when increment is clicked', () => {
    clickByCSS('#increment');
 
    expect(getCounterText()).toBe(
      'Current Count: 1'
    );
  });

  it('should decrement the counter value when decrement is clicked', () => {
    clickByCSS('#decrement');
 
    expect(getCounterText()).toBe(
      'Current Count: -1'
    );
  }); 

  it('should reset the counter value when reset is clicked', () => {
    clickByCSS('#increment');
    clickByCSS('#reset');
 
    expect(getCounterText()).toBe(
      'Current Count: 0'
    );
  });


  // Util functions used for tests
  function clickByCSS(selector: string) {
    const debugElement = fixture.debugElement.query(By.css(selector));
    const el: HTMLElement = debugElement.nativeElement;
    el.click();
    fixture.detectChanges();
  }
 
  function getCounterText() {
    const compiled = fixture.debugElement.nativeElement;
    return compiled.querySelector('div').textContent;
  }
  
});
