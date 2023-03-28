import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeExComponent } from './subscribe-ex.component';

describe('SubscribeExComponent', () => {
  let component: SubscribeExComponent;
  let fixture: ComponentFixture<SubscribeExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
