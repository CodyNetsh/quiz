import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-five',
  templateUrl: './five.page.html',
  styleUrls: ['./five.page.scss'],
})
export class FivePage implements OnInit {
value:any;
questions:any;
answer:any;
correct:any;
incorrect:any;
  hasAnswered: boolean = false;
  scoreComputer: number = 0;
  slideOptions: any;
  @ViewChild('slides') slides: any;
  hidevalue: boolean;
  // timer: NodeJS.Timeout;
  timeInSeconds: any;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  remainingTime: number;
  displayTime: string;
  time: any;
  scoreVehicle: number;
  scoreVideoGame: number;
  finalScore :number =  0;
  FirstName: any;
  LastName: any;

  constructor(private service:DataService, private router:Router,
    private route: ActivatedRoute) {

    this.service.load().subscribe(data =>{
      this.value = data;
      this.questions = this.value.results;
      this.answer = this.value.results;
      console.log(data);
   });
   }

  ngOnInit() {
    this.initTimer();
    this. startTimer(); 

    this.route.queryParams
      .subscribe(params =>
   {
       console.log(params);
       this.scoreVideoGame = params.scoreVideoGame;
      this.scoreVehicle = params.scoreVehicle,
      this.FirstName =params.FirstName,
      this.LastName=params.LastName;
      console.log( this.scoreVehicle,this.scoreVideoGame,this.FirstName,this.LastName); 
    });     
  }
  initTimer() {
    // Pomodoro is usually for 25 minutes
   if (!this.timeInSeconds) { 
     this.timeInSeconds = 600; 
    
   }
   this.time = this.timeInSeconds;
   this.runTimer = false;
   this.hasStarted = false;
   this.hasFinished = false;
   this.remainingTime = this.timeInSeconds;
   
   this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);

  }
    nextSlide(){
      this.slides.lockSwipes(false);
      this.slides.slideNext();
      this.slides.lockSwipes(true);
  }
    selectAnswer(answer,questions){

      this.hasAnswered = true;
      answer.selected = true;
      // questions.flashCardFlipped = true;

      if(answer.correct){
          this.scoreComputer++;
      }

      setTimeout(() => {
          this.hasAnswered = true;
          this.nextSlide();
          answer.selected = true;
          
          // questions.flashCardFlipped = false;
      }, 0);
  }

  randomizeAnswers(rawAnswers: any[]): any[] {

      for (let i = rawAnswers.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = rawAnswers[i];
          rawAnswers[i] = rawAnswers[j];
          rawAnswers[j] = temp;
      }

      return rawAnswers;

  }
  restartQuiz() {
          this.scoreComputer = 0;
          this.slides.lockSwipes(false);
          this.slides.slideTo(0, 1000);
          this.slides.lockSwipes(false);
      }
      press2(){
        console.log(this.scoreComputer += 1)
        if(this.hasAnswered = true){
          this.nextSlide();
        }
      }
      press1(){
        console.log(this.scoreComputer += 0)
        if(this.hasAnswered ==true){
          this.nextSlide();
        }
      }
     
      // press3(){
      //   console.log(this.scoreComputer += 0)
      //   if(this.hasAnswered ==true){
      //     this.nextSlide();
      //   }
      // }
      // press4(){
      //   console.log(this.scoreComputer += 0)
      //   if(this.hasAnswered ==true){
      //     this.nextSlide();
      //   }
      back(){
        this.scoreVideoGame = 10;
            this.slides.lockSwipes(false);
            this.slides.slideTo(10, 1000);
            this.slides.lockSwipes(false);
      }
      next(){
        this.finalScore =  +this.scoreComputer + +this.scoreVehicle + +this.scoreVideoGame;
        

        console.log(this.scoreComputer,this.scoreVehicle,this.scoreVideoGame, this.finalScore);
        this.router.navigate(['/score'], { queryParams:{ scoreComputer:this.scoreComputer,scoreVehicle:this.scoreVehicle, 
          scoreVideoGame:this.scoreVideoGame , finalScore:this.finalScore,FirstName:this.FirstName,LastName:this.LastName} });
     
      }
      done(){
        this.router.navigateByUrl("home");
          }
          view(){
            this.nextSlide();
          }

  startTimer(){
    this.runTimer = true;
    this.hasStarted = true;
    this.timerTick();
}
timerTick() {
  setTimeout(() => {

    if (!this.runTimer) { return; }
    this.remainingTime--;
    this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
    if (this.remainingTime > 0) {
      this.timerTick();
    }
    else if (this.hasFinished = true) {
      this.router.navigateByUrl("score")
    }
  }, 1000);
}

getSecondsAsDigitalClock(inputSeconds: number) {
  var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);
  var hoursString = '';
  var minutesString = '';
  var secondsString = '';
  hoursString = (hours < 10) ? "0" + hours : hours.toString();
  minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
  secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
  return hoursString + ':' + minutesString + ':' + secondsString;
}
}