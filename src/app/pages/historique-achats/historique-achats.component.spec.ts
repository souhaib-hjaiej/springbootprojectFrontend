import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueAchatsComponent } from './historique-achats.component';

describe('HistoriqueAchatsComponent', () => {
  let component: HistoriqueAchatsComponent;
  let fixture: ComponentFixture<HistoriqueAchatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriqueAchatsComponent]
    });
    fixture = TestBed.createComponent(HistoriqueAchatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
