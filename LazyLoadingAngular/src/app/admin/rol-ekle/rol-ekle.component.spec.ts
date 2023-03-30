import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolEkleComponent } from './rol-ekle.component';

describe('RolEkleComponent', () => {
  let component: RolEkleComponent;
  let fixture: ComponentFixture<RolEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolEkleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
