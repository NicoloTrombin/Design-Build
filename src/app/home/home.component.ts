import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showCaption = false;
  showCaption1 = false;
  showCaption2 = false;
  showCaption3 = false;
  isMobile = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event']) 
  onResize(event: any) {
    this.isMobile = window.innerWidth <= 759;
  }

}
