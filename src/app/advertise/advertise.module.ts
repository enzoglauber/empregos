import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdvertiseComponent } from './advertise.component';
import { AdvertiseFooterService } from './shared/advertise-footer/advertise-footer.service';
import { AdvertiseSharedModule } from './shared/advertise-shared.module';

@NgModule({
  declarations: [ 
    AdvertiseComponent
  ],
  imports: [
    CommonModule,
    AdvertiseSharedModule,
  ],
  providers: [
    AdvertiseFooterService
  ]
})
export class AdvertiseModule { }
