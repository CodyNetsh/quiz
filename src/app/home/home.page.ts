import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  FirstName=""
  LastName=""
  constructor(private router
    :Router,private route: ActivatedRoute) {}

  start() {
    
    console.log(this.FirstName, this.LastName);
    this.router.navigate(['/results'], { queryParams:{ FirstName:this.FirstName , LastName:this.LastName} });
     
  }
  start1() {
    console.log(this.FirstName, this.LastName);
    this.router.navigate(['/two'], { queryParams:{ FirstName:this.FirstName , LastName:this.LastName} });
  }
  start2() {
    console.log(this.FirstName, this.LastName);
    this.router.navigate(['/one'], { queryParams:{ FirstName:this.FirstName , LastName:this.LastName} });
  }
}
