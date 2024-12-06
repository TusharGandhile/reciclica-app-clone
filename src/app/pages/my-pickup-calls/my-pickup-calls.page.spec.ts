import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPickupCallsPage } from './my-pickup-calls.page';

describe('MyPickupCallsPage', () => {
  let component: MyPickupCallsPage;
  let fixture: ComponentFixture<MyPickupCallsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPickupCallsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
