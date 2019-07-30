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
  FirstName;
  LastName;
  constructor(private router
    :Router,private route: ActivatedRoute) {}

    ngOnInit() {
    
      this.route.queryParams
      .subscribe(params =>
   {
       console.log(params);
      this.scoreVideoGame = params.scoreVideoGame,
      this.FirstName = params.FirstName,
      this.LastName = params.LastName;
      console.log( this.scoreVideoGame,this.FirstName,this.LastName); 
    });     
    }

  start() {
    // this.router.navigateByUrl("three")
    console.log(this.scoreVideoGame,this.FirstName,this.LastName);
    this.router.navigate(['/three'], { queryParams:{ scoreVideoGame:this.scoreVideoGame,FirstName:this.FirstName,LastName:this.LastName} });
   
  }
  
}