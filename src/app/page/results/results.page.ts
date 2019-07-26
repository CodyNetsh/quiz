import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Data, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage {
  scoreVideoGame: number;
 
  constructor(private router
    :Router,private route: ActivatedRoute) {}

    ngOnInit() {
    
      this.route.queryParams
      .subscribe(params =>
   {
       console.log(params);
      this.scoreVideoGame = params.scoreVideoGame,
      console.log( this.scoreVideoGame); 
    });     
    }

  start() {
    // this.router.navigateByUrl("three")
    console.log(this.scoreVideoGame);
    this.router.navigate(['/three'], { queryParams:{ scoreVideoGame:this.scoreVideoGame} });
   
  }
  
}