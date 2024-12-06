import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickupCallCardPage } from './pickup-call-card.page';

describe('PickupCallCardPage', () => {
  let component: PickupCallCardPage;
  let fixture: ComponentFixture<PickupCallCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupCallCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
