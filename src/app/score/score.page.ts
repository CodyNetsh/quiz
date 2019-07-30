import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
  scoreVehicle:number;
  scoreVideoGame:number;
  scoreComputer:number;
  finalScore:number = 0;
  FirstName: any;
  LastName: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params =>
 {
     console.log(params);
     
       
      this.scoreVideoGame = params.scoreVideoGame,
      this.scoreVehicle = params.scoreVehicle ,
      this.scoreComputer = params.scoreComputer;
      this.finalScore = params.finalScore,
       this.FirstName =params.FirstName,
      this.LastName=params.LastName;
      console.log(this.scoreVehicle , this.scoreVideoGame,this.scoreComputer,this.finalScore,this.FirstName,this.LastName);      
});
  }

}
