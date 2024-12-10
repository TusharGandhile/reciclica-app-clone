import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { Router } from '@angular/router';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderPage);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the login on page load', fakeAsync(() => {
    spyOn(router, 'navigate');
    component.ngOnInit();
    tick(1500);
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  }));
});
