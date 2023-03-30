import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolGuncelleComponent } from './rol-guncelle.component';

describe('RolGuncelleComponent', () => {
  let component: RolGuncelleComponent;
  let fixture: ComponentFixture<RolGuncelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolGuncelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolGuncelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
