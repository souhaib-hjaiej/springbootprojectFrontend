import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PannesComponent } from './pannes.component';

describe('PannesComponent', () => {
  let component: PannesComponent;
  let fixture: ComponentFixture<PannesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PannesComponent]
    });
    fixture = TestBed.createComponent(PannesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
