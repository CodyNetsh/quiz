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

   
  constructor(private router:Router,private route: ActivatedRoute) {}

  ngOnInit() {
  
    this.route.queryParams
    .subscribe(params =>
 {
     console.log(params);
    this.scoreVideoGame = params.scoreVideoGame,
    this.scoreVehicle =params.scoreVehicle
    console.log( this.scoreVideoGame,this.scoreVehicle); 
  });     
  }
  start1() {
    // this.router.navigateByUrl("five")
    console.log(this.scoreVideoGame,this.scoreVehicle);
    this.router.navigate(['/five'], { queryParams:{ scoreVideoGame:this.scoreVideoGame,scoreVehicle:this.scoreVehicle} });
 
  }
}
