import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdvertiseService } from '../advertise.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-advertise-register-form',
  templateUrl: './advertise-register-form.component.html',
  styleUrls: ['./advertise-register-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdvertiseRegisterFormComponent implements OnInit {
  advertise: any = {
    responsibility: 0,
    city: 0,
  };
  carouselOptions = {
    margin: 0,
    nav: false,
    dots: false,
    loop: true,
    items: 1,
    responsiveClass: true,
    // navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsive: {
      1000: {
        items: 1,
        nav: false
      },
      1500: {
        items: 1,
        nav: false
      }
    }
  }
  
  slides = [];
  responsibilities$: Observable<any>;
  cities$: Observable<any>;

  constructor(
    private advertiseService: AdvertiseService
  ) { }

  ngOnInit() {
    this.slides = this.advertiseService.getSlides();
    this.responsibilities$ = this.advertiseService.getResponsibilities();
    this.cities$ = this.advertiseService.getCities();
  }

}
