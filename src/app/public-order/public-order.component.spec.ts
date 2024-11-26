import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicOrderComponent } from './public-order.component';

describe('PublicOrderComponent', () => {
  let component: PublicOrderComponent;
  let fixture: ComponentFixture<PublicOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublicOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
