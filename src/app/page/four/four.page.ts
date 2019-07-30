import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-four',
  templateUrl: './four.page.html',
  styleUrls: ['./four.page.scss'],
})
export class FourPage implements OnInit {

  value:any;
  questions:any;
  answer:any;
  correct:any;
  incorrect:any;
    hasAnswered: boolean = false;
    scoreVideoGame: number = 0;
  
    slideOptions: any;
    @ViewChild('slides') slides: any;
  hasFinished: boolean;
  displayTime: string;
  remainingTime: any;
  runTimer: any;
  hasStarted: boolean;
  timeInSeconds: any;
  time: any;
  FirstName;
  LastName;
    constructor(private service:DataService, private router:Router,private route: ActivatedRoute) {
  
      this.service.load1().subscribe(data =>{
        this.value = data;
          this.questions = this.value.results;
          this.answer = this.value.results;
        console.log(data);
        // this.slides.lockSwipes(true);
         
     });
   
     }
  
    ngOnInit() {
    
      this.initTimer();
      this. startTimer();
      
      this.route.queryParams
      .subscribe(params =>
        {
            console.log(params);
           this.FirstName = params.FirstName,
           this.LastName = params.LastName;
           console.log( this.FirstName,this.LastName); 
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
            this.scoreVideoGame++;
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
            this.scoreVideoGame = 0;
            this.slides.lockSwipes(false);
            this.slides.slideTo(0, 1000);
            this.slides.lockSwipes(false);
        }
        press2(){
          console.log(this.scoreVideoGame += 1)
          if(this.hasAnswered = true){
            this.nextSlide();
          }
        }
        press1(){
          console.log(this.scoreVideoGame += 0)
          if(this.hasAnswered = true){
            this.nextSlide();
          }
        }
        press3(){
          console.log(this.scoreVideoGame += 0)
          if(this.hasAnswered = true){
            this.nextSlide();
          }
        }
        press4(){
          console.log(this.scoreVideoGame += 0)
          if(this.hasAnswered = true){
            this.nextSlide();
          }
        }
        done(){
          this.router.navigateByUrl("home");
        }
        back(){
          this.scoreVideoGame = 10;
            this.slides.lockSwipes(false);
            this.slides.slideTo(10, 1000);
            this.slides.lockSwipes(false);
       
      }
        next(){
          
          console.log(this.scoreVideoGame,this.FirstName, this.LastName);
         this.router.navigate(['/results'], { queryParams:{ scoreVideoGame:this.scoreVideoGame,FirstName:this.FirstName , LastName:this.LastName} });
        
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
    else 
     if (this.hasFinished = true) {
      this.router.navigateByUrl("results")
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
  