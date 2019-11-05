import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';

import { AdvertiseFooterComponent } from './advertise-footer/advertise-footer.component';
import { AdvertiseHeaderComponent } from './advertise-header/advertise-header.component';
import { AdvertiseRegisterFormComponent } from './advertise-register-form/advertise-register-form.component';
import { AdvertiseService } from './advertise.service';

@NgModule({
  declarations: [
    AdvertiseFooterComponent, AdvertiseHeaderComponent, AdvertiseRegisterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OwlModule
  ],
  exports: [
    AdvertiseFooterComponent, AdvertiseHeaderComponent, AdvertiseRegisterFormComponent
  ],
  providers: [
    AdvertiseService
  ]
})
export class AdvertiseSharedModule { }
