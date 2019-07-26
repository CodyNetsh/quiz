import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.page.html',
  styleUrls: ['./one.page.scss'],
})
export class OnePage{
 
 
  constructor(private router
    :Router) {}

  start2() {
    this.router.navigateByUrl("four")
  }
}
