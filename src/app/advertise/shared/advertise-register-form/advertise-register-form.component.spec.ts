import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseRegisterFormComponent } from './advertise-register-form.component';

describe('AdvertiseRegisterFormComponent', () => {
  let component: AdvertiseRegisterFormComponent;
  let fixture: ComponentFixture<AdvertiseRegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiseRegisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
