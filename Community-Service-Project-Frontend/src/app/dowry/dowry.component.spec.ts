import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowryComponent } from './dowry.component';

describe('DowryComponent', () => {
  let component: DowryComponent;
  let fixture: ComponentFixture<DowryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DowryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DowryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
