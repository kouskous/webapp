import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditionComponent } from './customer-edition.component';

describe('CustomerEditionComponent', () => {
  let component: CustomerEditionComponent;
  let fixture: ComponentFixture<CustomerEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
