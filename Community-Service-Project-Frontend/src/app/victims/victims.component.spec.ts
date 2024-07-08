import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimsComponent } from './victims.component';

describe('VictimsComponent', () => {
  let component: VictimsComponent;
  let fixture: ComponentFixture<VictimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VictimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
