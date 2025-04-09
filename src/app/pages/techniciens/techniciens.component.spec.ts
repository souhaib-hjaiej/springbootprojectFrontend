import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniciensComponent } from './techniciens.component';

describe('TechniciensComponent', () => {
  let component: TechniciensComponent;
  let fixture: ComponentFixture<TechniciensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechniciensComponent]
    });
    fixture = TestBed.createComponent(TechniciensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
