import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss', '../home/home.component.scss'],
})
export class WorkComponent implements OnInit {

  showCaption = false;
  showCaption2 = false;
  showCaption3 = false;
  showCaption4 = false;
  showCaption5 = false;
  showCaption6 = false;
  showCaption7 = false;
  showCaption8 = false;
  showCaption9 = false;
  isMobile = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event']) 
  onResize(event: any) {
    this.isMobile = window.innerWidth <= 759;
  }

}
