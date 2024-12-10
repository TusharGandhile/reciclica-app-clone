import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPickupCallsPage } from './my-pickup-calls.page';
import { Router } from '@angular/router';

describe('MyPickupCallsPage', () => {
  let component: MyPickupCallsPage;
  let fixture: ComponentFixture<MyPickupCallsPage>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPickupCallsPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
