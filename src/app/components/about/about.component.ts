import { Component, OnInit } from '@angular/core';
import { IMAGES } from 'src/mocks/images.mocks';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  images: any;

  ngOnInit() {
    this.images = IMAGES;
  }
}
