import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertise-footer',
  templateUrl: './advertise-footer.component.html',
  styleUrls: ['./advertise-footer.component.scss']
})
export class AdvertiseFooterComponent implements OnInit {
  year: number;

  constructor() { }

  ngOnInit() {
    this.year = new Date().getFullYear();
  }

}
