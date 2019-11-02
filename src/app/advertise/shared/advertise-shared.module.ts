import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdvertiseFooterComponent } from './advertise-footer/advertise-footer.component';
import { AdvertiseHeaderComponent } from './advertise-header/advertise-header.component';
import { AdvertiseRegisterFormComponent } from './advertise-register-form/advertise-register-form.component';

@NgModule({
  declarations: [
    AdvertiseFooterComponent, AdvertiseHeaderComponent, AdvertiseRegisterFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdvertiseFooterComponent, AdvertiseHeaderComponent, AdvertiseRegisterFormComponent
  ]
})
export class AdvertiseSharedModule { }
