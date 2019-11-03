import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-advertise-register-form',
  templateUrl: './advertise-register-form.component.html',
  styleUrls: ['./advertise-register-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdvertiseRegisterFormComponent implements OnInit {
  
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
  
  slides = [
    {
      image: "assets/slider/1.jpg"
    },
    {
      image: "assets/slider/2.jpg"
    },
    {
      image: "assets/slider/3.jpg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
