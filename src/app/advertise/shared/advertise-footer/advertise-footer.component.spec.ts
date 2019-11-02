import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseFooterComponent } from './advertise-footer.component';

describe('AdvertiseFooterComponent', () => {
  let component: AdvertiseFooterComponent;
  let fixture: ComponentFixture<AdvertiseFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiseFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
