import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaInputFieldComponent } from './pizza-input-field.component';

describe('PizzaInputFieldComponent', () => {
  let component: PizzaInputFieldComponent;
  let fixture: ComponentFixture<PizzaInputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaInputFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
