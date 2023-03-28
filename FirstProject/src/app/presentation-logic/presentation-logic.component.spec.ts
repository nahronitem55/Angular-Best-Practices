import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationLogicComponent } from './presentation-logic.component';

describe('PresentationLogicComponent', () => {
  let component: PresentationLogicComponent;
  let fixture: ComponentFixture<PresentationLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationLogicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
