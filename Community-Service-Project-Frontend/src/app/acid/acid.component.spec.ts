import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcidComponent } from './acid.component';

describe('AcidComponent', () => {
  let component: AcidComponent;
  let fixture: ComponentFixture<AcidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
