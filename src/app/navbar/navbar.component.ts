import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  selectedPath = 'home';
  checkboxValue: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e) => e instanceof RoutesRecognized))
      .subscribe((val: any) => {
        this.selectedPath = val.urlAfterRedirects.split('/')[1];;
        console.log(this.selectedPath);
      });
  }

  toggleCheckbox() {
    this.checkboxValue = !this.checkboxValue;
  }

  redirectToContact() {
    this.router.navigateByUrl('/contact');
  }

}
