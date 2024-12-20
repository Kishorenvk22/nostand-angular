import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsDetailsComponent } from './restaurants-details.component';

describe('RestaurantsDetailsComponent', () => {
  let component: RestaurantsDetailsComponent;
  let fixture: ComponentFixture<RestaurantsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
