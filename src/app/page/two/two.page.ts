import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-two',
  templateUrl: './two.page.html',
  styleUrls: ['./two.page.scss'],
})
export class TwoPage  {
  scoreVideoGame: number;
  scoreVehicle: number;
  FirstName: any;
  LastName: any;

   
  constructor(private router:Router,private route: ActivatedRoute) {}

  ngOnInit() {
  
    this.route.queryParams
    .subscribe(params =>
 {
     console.log(params);
    this.scoreVideoGame = params.scoreVideoGame,
    this.scoreVehicle =params.scoreVehicle,
    this.FirstName =params.FirstName,
    this.LastName=params.LastName;
    console.log( this.scoreVideoGame,this.scoreVehicle,this.FirstName,this.LastName); 
  });     
  }
  start1() {
    // this.router.navigateByUrl("five")
    console.log(this.scoreVideoGame,this.scoreVehicle,this.FirstName,this.LastName);
    this.router.navigate(['/five'], { queryParams:{ scoreVideoGame:this.scoreVideoGame,
      scoreVehicle:this.scoreVehicle,LastName:this.LastName,FirstName:this.FirstName} });
 
  }
}
