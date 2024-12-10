import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { Router } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to my pickup calls on see all', () => {
    spyOn(router, 'navigate');
    component.goToMyPickupCalls();
    expect(router.navigate).toHaveBeenCalledWith(['my-pickup-calls']);
  });

  it('should go to pickup call on create pickup call', () => {
    spyOn(router, 'navigate');
    component.goToPickupCall();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-call']);
  });
});
