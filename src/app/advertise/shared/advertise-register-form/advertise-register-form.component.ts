import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdvertiseService } from '../advertise.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-advertise-register-form',
  templateUrl: './advertise-register-form.component.html',
  styleUrls: ['./advertise-register-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdvertiseRegisterFormComponent implements OnInit {
  form: FormGroup;
  isSubmitted = false;

  carouselOptions = {
    margin: 0,
    nav: false,
    dots: false,
    loop: true,
    autoplay: true,
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
    // 
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required] ), 
      email: new FormControl(null, [Validators.required] ), 
      cellphone: new FormControl(null, [Validators.required, Validators.pattern('^\\d*$')] ), 
      city: new FormControl(0, [Validators.required] ), 
      responsibility: new FormControl(0, [Validators.required] ), 
    }, { updateOn: 'blur' });
  }

  save (): void {
    this.isSubmitted = true;
    if(this.form.invalid){
      return;
    }
    console.log('Enviando dados', this.form.value)
  }

  get formControls() { 
    return this.form.controls; 
  }
}
