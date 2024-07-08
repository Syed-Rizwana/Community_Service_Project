import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvComponent } from './dv.component';

describe('DvComponent', () => {
  let component: DvComponent;
  let fixture: ComponentFixture<DvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
