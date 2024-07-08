import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbourComponent } from './abour.component';

describe('AbourComponent', () => {
  let component: AbourComponent;
  let fixture: ComponentFixture<AbourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
