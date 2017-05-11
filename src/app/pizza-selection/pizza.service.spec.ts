import { TestBed, inject } from '@angular/core/testing';

import { PizzaService } from './pizza.service';

xdescribe('PizzaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaService]
    });
  });

  xit('should ...', inject([PizzaService], (service: PizzaService) => {
    expect(service).toBeTruthy();
  }));
});
