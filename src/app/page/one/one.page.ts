import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.page.html',
  styleUrls: ['./one.page.scss'],
})
export class OnePage{
 
  FirstName;
  LastName;
  constructor(private router
    :Router ,private route: ActivatedRoute) {}

  start2() {
    console.log(this.FirstName, this.LastName);
    this.router.navigate(['/four'], { queryParams:{ FirstName:this.FirstName , LastName:this.LastName} });
     
  }
  ngOnInit() {
    
    this.route.queryParams
    .subscribe(params =>
 {
     console.log(params);
    this.FirstName = params.FirstName,
    this.LastName = params.LastName;
    console.log( this.FirstName,this.LastName); 
  });     
  }
}
