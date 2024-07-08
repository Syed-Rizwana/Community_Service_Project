import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShComponent } from './sh.component';

describe('ShComponent', () => {
  let component: ShComponent;
  let fixture: ComponentFixture<ShComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
