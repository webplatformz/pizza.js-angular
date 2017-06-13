import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPreviewComponent } from './pizza-preview.component';

describe('PizzaPreviewComponent', () => {
  let component: PizzaPreviewComponent;
  let fixture: ComponentFixture<PizzaPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
