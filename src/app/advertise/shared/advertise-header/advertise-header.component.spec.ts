import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseHeaderComponent } from './advertise-header.component';

describe('AdvertiseHeaderComponent', () => {
  let component: AdvertiseHeaderComponent;
  let fixture: ComponentFixture<AdvertiseHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiseHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
