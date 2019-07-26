import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router
    :Router) {}

  start() {
    this.router.navigateByUrl("results")
  }
  start1() {
    this.router.navigateByUrl("two")
  }
  start2() {
    this.router.navigateByUrl("one")
  }
}
